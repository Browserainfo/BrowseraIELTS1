/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  AudioPlaybackStatus,
  ListeningChunk,
  buildListeningChunks,
  buildOrderedEnglishVoicePool,
  calculateChunkProgressPercent,
  estimateSpeechDurationSeconds,
  getChunkStallTimeoutMs,
  isRealAudioUrl,
  pickPreferredVoices
} from '../utils/listeningAudio';

export interface UseListeningAudioPlayerOptions {
  sectionKey: string;
  transcript: string;
  audioScenario?: string;
  audioDurationSeconds?: number;
  audioUrl?: string;
  isActive: boolean;
  singlePlay?: boolean;
  isLockedCompleted?: boolean;
  onSectionCompleted?: (sectionKey: string) => void;
}

export interface ListeningAudioPlayerState {
  status: AudioPlaybackStatus;
  isPlaying: boolean;
  isLockedCompleted: boolean;
  progressPercent: number;
  elapsedSeconds: number;
  totalDurationSeconds: number;
  recoveryNotice: string | null;
  togglePlayPause: () => void;
  startSectionPlayback: () => void;
  restartTrack: () => void;
}

interface SectionPlaybackSnapshot {
  chunkIndex: number;
  audioTime: number;
  elapsedSeconds: number;
  progressPercent: number;
  completed: boolean;
}

const SPEECH_RATE = 0.96;

export function useListeningAudioPlayer({
  sectionKey,
  transcript,
  audioScenario,
  audioDurationSeconds = 180,
  audioUrl,
  isActive,
  singlePlay = true,
  isLockedCompleted = false,
  onSectionCompleted
}: UseListeningAudioPlayerOptions): ListeningAudioPlayerState {
  const chunksRef = useRef<ListeningChunk[]>([]);
  chunksRef.current = buildListeningChunks(transcript, audioScenario);

  const estimatedSpeechDuration = estimateSpeechDurationSeconds(chunksRef.current, SPEECH_RATE);
  const fallbackDuration = Math.max(30, Number(audioDurationSeconds) || 180);
  const defaultTrackDuration = estimatedSpeechDuration > 0 ? estimatedSpeechDuration : fallbackDuration;

  const [totalDurationSeconds, setTotalDurationSeconds] = useState<number>(defaultTrackDuration);
  const totalDurationRef = useRef<number>(defaultTrackDuration);

  const [status, setStatus] = useState<AudioPlaybackStatus>('idle');
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [recoveryNotice, setRecoveryNotice] = useState<string | null>(null);
  const [lockedCompleted, setLockedCompleted] = useState<boolean>(isLockedCompleted);

  const onSectionCompletedRef = useRef(onSectionCompleted);
  onSectionCompletedRef.current = onSectionCompleted;

  const sectionKeyRef = useRef<string>(sectionKey);
  const sectionCacheRef = useRef<Map<string, SectionPlaybackSnapshot>>(new Map());

  // Loaded browser speech synthesis voices (updated via voiceschanged on Windows Chrome/Edge)
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const voiceFallbackOffsetRef = useRef<number>(0);
  // Retain strong JS reference to active SpeechSynthesisUtterance so V8 GC never collects it mid-speech
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const shouldBePlayingRef = useRef<boolean>(false);
  const statusRef = useRef<AudioPlaybackStatus>('idle');
  const progressPercentRef = useRef<number>(0);
  const elapsedSecondsRef = useRef<number>(0);
  const lockedCompletedRef = useRef<boolean>(isLockedCompleted);

  const utteranceTokenRef = useRef<number>(0);
  const currentChunkIndexRef = useRef<number>(0);
  const chunkStartedAtRef = useRef<number>(0);
  const speechStartedRef = useRef<boolean>(false);
  const chunkRetriesRef = useRef<number>(0);
  const transitionPendingRef = useRef<boolean>(false);

  const audioElRef = useRef<HTMLAudioElement | null>(null);
  const usingAudioElementRef = useRef<boolean>(false);
  const lastAudioTimeRef = useRef<number>(0);
  const lastAudioProgressAtRef = useRef<number>(0);
  const audioRetriesRef = useRef<number>(0);

  const watchdogIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const recoveryTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nextChunkTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const flushSpeakTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingSeekCleanupRef = useRef<(() => void) | null>(null);

  const updateStatus = useCallback((next: AudioPlaybackStatus) => {
    statusRef.current = next;
    setStatus(next);
  }, []);

  const updateProgress = useCallback((nextPct: number) => {
    const clamped = Math.max(0, Math.min(100, Math.round(nextPct * 10) / 10));
    progressPercentRef.current = clamped;
    setProgressPercent(clamped);
    return clamped;
  }, []);

  const updateElapsed = useCallback((nextSec: number) => {
    const safeSec = Math.max(0, Math.min(totalDurationRef.current, Math.floor(nextSec)));
    elapsedSecondsRef.current = safeSec;
    setElapsedSeconds(safeSec);
    return safeSec;
  }, []);

  const saveSnapshot = useCallback((key: string, completedOverride?: boolean) => {
    const isComp = completedOverride !== undefined
      ? completedOverride
      : (lockedCompletedRef.current || statusRef.current === 'completed');
    sectionCacheRef.current.set(key, {
      chunkIndex: currentChunkIndexRef.current,
      audioTime: lastAudioTimeRef.current,
      elapsedSeconds: elapsedSecondsRef.current,
      progressPercent: progressPercentRef.current,
      completed: isComp
    });
  }, []);

  const clearPlaybackTimers = useCallback(() => {
    if (watchdogIntervalRef.current) {
      clearInterval(watchdogIntervalRef.current);
      watchdogIntervalRef.current = null;
    }
    if (recoveryTimerRef.current) {
      clearTimeout(recoveryTimerRef.current);
      recoveryTimerRef.current = null;
    }
    if (nextChunkTimerRef.current) {
      clearTimeout(nextChunkTimerRef.current);
      nextChunkTimerRef.current = null;
    }
    if (flushSpeakTimerRef.current) {
      clearTimeout(flushSpeakTimerRef.current);
      flushSpeakTimerRef.current = null;
    }
  }, []);

  const cancelSpeechEngine = useCallback(() => {
    speechStartedRef.current = false;
    activeUtteranceRef.current = null;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // Ignore browser cancel errors
      }
    }
  }, []);

  const cleanupAudioElement = useCallback(() => {
    if (pendingSeekCleanupRef.current) {
      pendingSeekCleanupRef.current();
      pendingSeekCleanupRef.current = null;
    }
    if (audioElRef.current) {
      try {
        audioElRef.current.pause();
        audioElRef.current.onplaying = null;
        audioElRef.current.onwaiting = null;
        audioElRef.current.onstalled = null;
        audioElRef.current.onerror = null;
        audioElRef.current.onended = null;
        audioElRef.current.ontimeupdate = null;
        audioElRef.current.onloadedmetadata = null;
        audioElRef.current.onpause = null;
        audioElRef.current.removeAttribute('src');
        audioElRef.current.load();
      } catch {
        // Ignore cleanup errors
      }
      audioElRef.current = null;
    }
    usingAudioElementRef.current = false;
  }, []);

  const stopAllAudioHardware = useCallback(() => {
    utteranceTokenRef.current += 1;
    transitionPendingRef.current = false;
    clearPlaybackTimers();
    cancelSpeechEngine();
    cleanupAudioElement();
  }, [cancelSpeechEngine, cleanupAudioElement, clearPlaybackTimers]);

  const markSectionCompleted = useCallback(() => {
    shouldBePlayingRef.current = false;
    activeUtteranceRef.current = null;
    clearPlaybackTimers();
    updateProgress(100);
    updateElapsed(totalDurationRef.current);
    setRecoveryNotice(null);
    updateStatus('completed');

    if (singlePlay) {
      lockedCompletedRef.current = true;
      setLockedCompleted(true);
    }

    const activeKey = sectionKeyRef.current;
    saveSnapshot(activeKey, true);
    onSectionCompletedRef.current?.(activeKey);
  }, [clearPlaybackTimers, saveSnapshot, singlePlay, updateElapsed, updateProgress, updateStatus]);

  // Keep speech synthesis voice list updated via voiceschanged (crucial for Windows Chrome/Edge)
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const synth = window.speechSynthesis;

    const refreshVoices = () => {
      try {
        const list = synth.getVoices();
        if (Array.isArray(list) && list.length > 0) {
          voicesRef.current = list;
        }
      } catch {
        // Ignore browser voice query errors
      }
    };

    refreshVoices();

    if (typeof synth.addEventListener === 'function') {
      synth.addEventListener('voiceschanged', refreshVoices);
      return () => synth.removeEventListener('voiceschanged', refreshVoices);
    }

    const prevHandler = synth.onvoiceschanged;
    synth.onvoiceschanged = refreshVoices;
    return () => {
      if (synth.onvoiceschanged === refreshVoices) {
        synth.onvoiceschanged = prevHandler || null;
      }
    };
  }, []);

  const speakChunk = useCallback((chunkIdx: number, flushBeforeSpeak: boolean = false) => {
    if (!shouldBePlayingRef.current) return;

    const chunks = chunksRef.current;
    if (chunks.length === 0) {
      shouldBePlayingRef.current = false;
      clearPlaybackTimers();
      updateStatus('error');
      setRecoveryNotice('Audio script unavailable — click Resume Audio to retry');
      return;
    }

    if (chunkIdx >= chunks.length) {
      markSectionCompleted();
      return;
    }

    currentChunkIndexRef.current = chunkIdx;
    const chunk = chunks[chunkIdx];

    if (typeof window === 'undefined' || !('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
      shouldBePlayingRef.current = false;
      clearPlaybackTimers();
      updateStatus('error');
      setRecoveryNotice('Audio paused — browser voice synthesis is unavailable');
      return;
    }

    const token = ++utteranceTokenRef.current;
    const synth = window.speechSynthesis;

    const dispatchUtterance = () => {
      if (token !== utteranceTokenRef.current || !shouldBePlayingRef.current) return;

      // Refresh voice list right before speaking in case voiceschanged fired slightly earlier
      try {
        const latestVoices = synth.getVoices();
        if (latestVoices.length > 0) {
          voicesRef.current = latestVoices;
        }
      } catch {
        // Ignore
      }

      const utterance = new SpeechSynthesisUtterance(chunk.text);
      utterance.rate = SPEECH_RATE;
      utterance.pitch = chunk.pitch;
      utterance.volume = 1.0;

      const { primary, secondary } = pickPreferredVoices(
        voicesRef.current,
        voiceFallbackOffsetRef.current
      );
      const selectedVoice = chunk.pitch !== 1.0 && secondary ? secondary : primary;
      if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang || 'en-GB';
      } else {
        utterance.lang = 'en-GB';
      }

      // Hold strong reference so V8 GC cannot drop onend/onerror listeners on Chromium
      activeUtteranceRef.current = utterance;

      transitionPendingRef.current = false;
      speechStartedRef.current = false;
      chunkStartedAtRef.current = Date.now();
      updateStatus('playing');
      setRecoveryNotice(null);

      utterance.onstart = () => {
        if (token !== utteranceTokenRef.current || !shouldBePlayingRef.current) return;
        speechStartedRef.current = true;
        chunkStartedAtRef.current = Date.now();
        chunkRetriesRef.current = 0;
        updateStatus('playing');
        setRecoveryNotice(null);
      };

      utterance.onend = () => {
        if (token !== utteranceTokenRef.current) return;
        activeUtteranceRef.current = null;
        if (!shouldBePlayingRef.current) return;

        speechStartedRef.current = false;
        chunkRetriesRef.current = 0;
        const nextIdx = chunkIdx + 1;

        if (chunks[chunkIdx]) {
          const totalWeight = chunks.reduce((s, c) => s + c.weight, 0);
          if (totalWeight > 0) {
            const completedWeight = chunks[chunkIdx].cumulativeStartWeight + chunks[chunkIdx].weight;
            const exactPct = Math.min(99.5, (completedWeight / totalWeight) * 100);
            const mergedPct = Math.max(progressPercentRef.current, exactPct);
            updateProgress(mergedPct);
            updateElapsed(Math.round((mergedPct / 100) * totalDurationRef.current));
          }
        }

        if (nextIdx >= chunksRef.current.length) {
          markSectionCompleted();
          return;
        }

        currentChunkIndexRef.current = nextIdx;
        saveSnapshot(sectionKeyRef.current, false);
        transitionPendingRef.current = true;
        nextChunkTimerRef.current = setTimeout(() => {
          if (token !== utteranceTokenRef.current || !shouldBePlayingRef.current) return;
          // Sequential transition: NEVER call synth.cancel() here to avoid Chromium queue collisions
          speakChunk(nextIdx, false);
        }, 85);
      };

      utterance.onerror = () => {
        if (token !== utteranceTokenRef.current) return;
        activeUtteranceRef.current = null;
        if (!shouldBePlayingRef.current) return;
        triggerSpeechRecovery();
      };

      try {
        synth.speak(utterance);
        if (synth.paused) {
          synth.resume();
        }
      } catch {
        activeUtteranceRef.current = null;
        triggerSpeechRecovery();
      }
    };

    // Only flush speech queue when explicitly starting/recovering — with a 60ms settle delay
    // so synth.cancel() does not abort the newly enqueued utterance on Chrome/Edge.
    if (flushBeforeSpeak) {
      let didCancel = false;
      try {
        if (synth.speaking || synth.pending || synth.paused) {
          synth.cancel();
          didCancel = true;
        }
      } catch {
        // Ignore cancel errors
      }
      if (didCancel) {
        transitionPendingRef.current = true;
        flushSpeakTimerRef.current = setTimeout(dispatchUtterance, 60);
        return;
      }
    }

    dispatchUtterance();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearPlaybackTimers, markSectionCompleted, saveSnapshot, updateElapsed, updateProgress, updateStatus]);

  const triggerSpeechRecovery = useCallback(() => {
    if (!shouldBePlayingRef.current) return;
    if (recoveryTimerRef.current) return;

    utteranceTokenRef.current += 1;
    activeUtteranceRef.current = null;
    speechStartedRef.current = false;
    transitionPendingRef.current = true;

    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    } catch {
      // Ignore cancel errors during recovery
    }

    const attempt = chunkRetriesRef.current + 1;
    chunkRetriesRef.current = attempt;

    // Never skip a sentence/chunk! Retry the SAME chunk with alternate voice fallback if needed.
    if (attempt > 3) {
      shouldBePlayingRef.current = false;
      transitionPendingRef.current = false;
      clearPlaybackTimers();
      saveSnapshot(sectionKeyRef.current, false);
      updateStatus('error');
      setRecoveryNotice('Audio paused — click Resume Audio to continue from current sentence');
      return;
    }

    const voicePool = buildOrderedEnglishVoicePool(voicesRef.current);
    if (voicePool.length > 1) {
      voiceFallbackOffsetRef.current += 1;
    }

    updateStatus('recovering');
    setRecoveryNotice(`Audio interrupted — recovering current sentence (${attempt}/3)...`);

    const delayMs = 260 * attempt;
    recoveryTimerRef.current = setTimeout(() => {
      recoveryTimerRef.current = null;
      if (!shouldBePlayingRef.current) return;
      speakChunk(currentChunkIndexRef.current, true);
    }, delayMs);
  }, [clearPlaybackTimers, saveSnapshot, speakChunk, updateStatus]);

  const triggerAudioElementRecovery = useCallback(() => {
    const audio = audioElRef.current;
    if (!audio || !shouldBePlayingRef.current) return;
    if (recoveryTimerRef.current) return;

    const attempt = audioRetriesRef.current + 1;
    audioRetriesRef.current = attempt;

    // After 3 HTML5 stream failures, fail over smoothly to chunked speech synthesis at same position
    if (attempt > 3) {
      const dur = audio.duration && Number.isFinite(audio.duration) && audio.duration > 0
        ? audio.duration
        : totalDurationRef.current;
      const ratio = dur > 0 ? Math.min(0.95, Math.max(0, lastAudioTimeRef.current / dur)) : 0;
      cleanupAudioElement();

      totalDurationRef.current = defaultTrackDuration;
      setTotalDurationSeconds(defaultTrackDuration);

      const targetIdx = Math.min(
        Math.max(0, chunksRef.current.length - 1),
        Math.floor(ratio * chunksRef.current.length)
      );
      chunkRetriesRef.current = 0;
      updateElapsed(Math.round(ratio * defaultTrackDuration));
      updateProgress(Math.max(progressPercentRef.current, ratio * 100));
      setRecoveryNotice('Switching to backup voice stream...');
      speakChunk(targetIdx, true);
      return;
    }

    updateStatus('recovering');
    setRecoveryNotice(`Audio buffering (retry ${attempt}/3)...`);

    const delayMs = attempt * 750;
    recoveryTimerRef.current = setTimeout(() => {
      recoveryTimerRef.current = null;
      const el = audioElRef.current;
      if (!el || !shouldBePlayingRef.current) return;

      const resumeAt = lastAudioTimeRef.current;

      if (pendingSeekCleanupRef.current) {
        pendingSeekCleanupRef.current();
        pendingSeekCleanupRef.current = null;
      }

      const attemptPlayAtPosition = () => {
        if (!shouldBePlayingRef.current || audioElRef.current !== el) return;
        try {
          if (resumeAt > 0 && el.duration && Number.isFinite(el.duration) && resumeAt < el.duration) {
            el.currentTime = resumeAt;
          }
          el.play()
            .then(() => {
              if (!shouldBePlayingRef.current) return;
              lastAudioProgressAtRef.current = Date.now();
              updateStatus('playing');
              setRecoveryNotice(null);
            })
            .catch(() => {
              triggerAudioElementRecovery();
            });
        } catch {
          triggerAudioElementRecovery();
        }
      };

      const onCanPlay = () => {
        cleanupListeners();
        attemptPlayAtPosition();
      };
      const cleanupListeners = () => {
        el.removeEventListener('loadedmetadata', onCanPlay);
        el.removeEventListener('canplay', onCanPlay);
      };
      pendingSeekCleanupRef.current = cleanupListeners;

      try {
        el.addEventListener('loadedmetadata', onCanPlay, { once: true });
        el.addEventListener('canplay', onCanPlay, { once: true });
        el.load();
      } catch {
        cleanupListeners();
        triggerAudioElementRecovery();
      }
    }, delayMs);
  }, [cleanupAudioElement, defaultTrackDuration, speakChunk, updateElapsed, updateProgress, updateStatus]);

  const startWatchdog = useCallback(() => {
    if (watchdogIntervalRef.current) {
      clearInterval(watchdogIntervalRef.current);
    }

    watchdogIntervalRef.current = setInterval(() => {
      if (!shouldBePlayingRef.current) return;

      const now = Date.now();

      // Mode A: HTML5 Audio Stream
      if (usingAudioElementRef.current && audioElRef.current) {
        const el = audioElRef.current;
        if (el.ended) return;

        if (!el.paused && el.readyState >= 2 && el.currentTime > lastAudioTimeRef.current + 0.02) {
          lastAudioTimeRef.current = el.currentTime;
          lastAudioProgressAtRef.current = now;
          audioRetriesRef.current = 0;
          if (statusRef.current !== 'playing') {
            updateStatus('playing');
            setRecoveryNotice(null);
          }

          const effectiveDur = el.duration && Number.isFinite(el.duration) && el.duration > 0
            ? Math.round(el.duration)
            : totalDurationRef.current;
          if (effectiveDur !== totalDurationRef.current) {
            totalDurationRef.current = effectiveDur;
            setTotalDurationSeconds(effectiveDur);
          }
          updateElapsed(Math.floor(el.currentTime));
          const pct = effectiveDur > 0 ? (el.currentTime / effectiveDur) * 100 : 0;
          updateProgress(Math.max(progressPercentRef.current, Math.min(99.5, pct)));
          saveSnapshot(sectionKeyRef.current, false);
        } else if (now - lastAudioProgressAtRef.current > 5500 && !recoveryTimerRef.current) {
          triggerAudioElementRecovery();
        }
        return;
      }

      // Mode B: Chunked Web Speech Synthesis
      const chunks = chunksRef.current;
      const chunkIdx = currentChunkIndexRef.current;
      const currentChunk = chunks[chunkIdx];
      if (!currentChunk || transitionPendingRef.current || recoveryTimerRef.current) {
        return;
      }

      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        return;
      }

      const synth = window.speechSynthesis;
      const chunkElapsedMs = chunkStartedAtRef.current > 0 ? now - chunkStartedAtRef.current : 0;

      // Chromium/Windows ~15s auto-pause recovery
      if (synth.paused && shouldBePlayingRef.current) {
        try {
          synth.resume();
        } catch {
          triggerSpeechRecovery();
          return;
        }
      }

      // Allow up to 4500ms for slower Windows/macOS neural voices to fire onstart,
      // or 1400ms grace if an utterance started and died without firing onend.
      const startupStalled = !speechStartedRef.current && chunkElapsedMs > 4500 && !synth.speaking && !synth.pending;
      const midChunkDropped = speechStartedRef.current && chunkElapsedMs > 1400 && !synth.speaking && !synth.pending;

      if (startupStalled || midChunkDropped) {
        triggerSpeechRecovery();
        return;
      }

      const maxStallMs = getChunkStallTimeoutMs(currentChunk.text, SPEECH_RATE);
      if (chunkElapsedMs > maxStallMs) {
        triggerSpeechRecovery();
        return;
      }

      // ONLY advance progress/elapsed when audio is genuinely speaking (never silently!)
      const isActivelySpeaking =
        statusRef.current === 'playing' &&
        (speechStartedRef.current || synth.speaking) &&
        !synth.paused;

      if (isActivelySpeaking) {
        speechStartedRef.current = true;
        const nextPct = calculateChunkProgressPercent(
          chunks,
          chunkIdx,
          chunkElapsedMs,
          'playing',
          progressPercentRef.current
        );
        updateProgress(nextPct);
        updateElapsed(Math.round((nextPct / 100) * totalDurationRef.current));
        saveSnapshot(sectionKeyRef.current, false);
      }
    }, 400);
  }, [saveSnapshot, triggerAudioElementRecovery, triggerSpeechRecovery, updateElapsed, updateProgress, updateStatus]);

  const startPlaybackFromCurrentPosition = useCallback(() => {
    if (!isActive) return;
    if (singlePlay && lockedCompletedRef.current) {
      return;
    }

    shouldBePlayingRef.current = true;
    chunkRetriesRef.current = 0;

    if (statusRef.current === 'completed') {
      if (singlePlay) {
        shouldBePlayingRef.current = false;
        return;
      }
      currentChunkIndexRef.current = 0;
      lastAudioTimeRef.current = 0;
      updateProgress(0);
      updateElapsed(0);
    }

    startWatchdog();

    if (isRealAudioUrl(audioUrl) && typeof Audio !== 'undefined') {
      usingAudioElementRef.current = true;
      let audio = audioElRef.current;
      if (!audio) {
        audio = new Audio(audioUrl);
        audio.preload = 'auto';
        audioElRef.current = audio;

        audio.onloadedmetadata = () => {
          if (audio && audio.duration && Number.isFinite(audio.duration) && audio.duration > 0) {
            const dur = Math.round(audio.duration);
            totalDurationRef.current = dur;
            setTotalDurationSeconds(dur);
          }
        };
        audio.onplaying = () => {
          if (!shouldBePlayingRef.current) return;
          audioRetriesRef.current = 0;
          lastAudioProgressAtRef.current = Date.now();
          updateStatus('playing');
          setRecoveryNotice(null);
        };
        audio.onwaiting = () => {
          if (!shouldBePlayingRef.current) return;
          updateStatus('recovering');
          setRecoveryNotice('Buffering audio...');
        };
        audio.onstalled = () => {
          if (!shouldBePlayingRef.current) return;
          lastAudioProgressAtRef.current = Math.min(lastAudioProgressAtRef.current, Date.now() - 4000);
          updateStatus('recovering');
          setRecoveryNotice('Stream buffering — maintaining position...');
        };
        audio.onerror = () => {
          if (!shouldBePlayingRef.current) return;
          triggerAudioElementRecovery();
        };
        audio.onpause = () => {
          if (shouldBePlayingRef.current && !audio?.ended) {
            triggerAudioElementRecovery();
          }
        };
        audio.onended = () => {
          markSectionCompleted();
        };
      }

      lastAudioProgressAtRef.current = Date.now();
      if (lastAudioTimeRef.current > 0 && audio.readyState >= 1 && Math.abs(audio.currentTime - lastAudioTimeRef.current) > 1) {
        audio.currentTime = lastAudioTimeRef.current;
      }

      audio.play()
        .then(() => {
          if (!shouldBePlayingRef.current) return;
          updateStatus('playing');
          setRecoveryNotice(null);
        })
        .catch(() => {
          triggerAudioElementRecovery();
        });
      return;
    }

    usingAudioElementRef.current = false;
    speakChunk(currentChunkIndexRef.current, true);
  }, [audioUrl, isActive, markSectionCompleted, singlePlay, speakChunk, startWatchdog, triggerAudioElementRecovery, updateElapsed, updateProgress, updateStatus]);

  const pausePlayback = useCallback(() => {
    shouldBePlayingRef.current = false;
    utteranceTokenRef.current += 1;
    transitionPendingRef.current = false;
    clearPlaybackTimers();
    cancelSpeechEngine();
    if (audioElRef.current) {
      try {
        lastAudioTimeRef.current = audioElRef.current.currentTime || lastAudioTimeRef.current;
        audioElRef.current.pause();
      } catch {
        // Ignore pause errors
      }
    }
    setRecoveryNotice(null);
    updateStatus('paused');
    saveSnapshot(sectionKeyRef.current, false);
  }, [cancelSpeechEngine, clearPlaybackTimers, saveSnapshot, updateStatus]);

  const togglePlayPause = useCallback(() => {
    if (!isActive) return;
    if (singlePlay && (lockedCompletedRef.current || statusRef.current === 'completed')) {
      return;
    }
    if (shouldBePlayingRef.current || statusRef.current === 'playing' || statusRef.current === 'recovering') {
      pausePlayback();
    } else {
      startPlaybackFromCurrentPosition();
    }
  }, [isActive, pausePlayback, singlePlay, startPlaybackFromCurrentPosition]);

  const startSectionPlayback = useCallback(() => {
    if (!isActive) return;
    if (singlePlay && (lockedCompletedRef.current || statusRef.current === 'completed')) {
      return;
    }
    if (!shouldBePlayingRef.current && statusRef.current !== 'playing') {
      startPlaybackFromCurrentPosition();
    }
  }, [isActive, singlePlay, startPlaybackFromCurrentPosition]);

  const restartTrack = useCallback(() => {
    if (singlePlay && (lockedCompletedRef.current || currentChunkIndexRef.current > 0 || progressPercentRef.current > 0)) {
      return;
    }
    stopAllAudioHardware();
    shouldBePlayingRef.current = false;
    currentChunkIndexRef.current = 0;
    lastAudioTimeRef.current = 0;
    chunkRetriesRef.current = 0;
    updateElapsed(0);
    updateProgress(0);
    setRecoveryNotice(null);
    updateStatus('idle');
    if (isActive) {
      startPlaybackFromCurrentPosition();
    }
  }, [isActive, singlePlay, startPlaybackFromCurrentPosition, stopAllAudioHardware, updateElapsed, updateProgress, updateStatus]);

  // Synchronize external locked-completed flag when switching sections
  useEffect(() => {
    if (isLockedCompleted) {
      lockedCompletedRef.current = true;
      setLockedCompleted(true);
      updateProgress(100);
      updateElapsed(totalDurationRef.current);
      updateStatus('completed');
    }
  }, [isLockedCompleted, updateElapsed, updateProgress, updateStatus]);

  // Handle section switches without losing played/completed single-play state
  useEffect(() => {
    const prevKey = sectionKeyRef.current;
    if (prevKey && prevKey !== sectionKey) {
      saveSnapshot(prevKey);
    }

    sectionKeyRef.current = sectionKey;
    shouldBePlayingRef.current = false;
    chunkRetriesRef.current = 0;
    audioRetriesRef.current = 0;
    stopAllAudioHardware();

    totalDurationRef.current = defaultTrackDuration;
    setTotalDurationSeconds(defaultTrackDuration);

    const saved = sectionCacheRef.current.get(sectionKey);
    const isCompleted = Boolean(isLockedCompleted || saved?.completed);

    if (isCompleted) {
      lockedCompletedRef.current = true;
      setLockedCompleted(true);
      currentChunkIndexRef.current = chunksRef.current.length;
      lastAudioTimeRef.current = defaultTrackDuration;
      updateElapsed(defaultTrackDuration);
      updateProgress(100);
      setRecoveryNotice(null);
      updateStatus('completed');
    } else if (saved && (saved.chunkIndex > 0 || saved.progressPercent > 0 || saved.audioTime > 0)) {
      lockedCompletedRef.current = false;
      setLockedCompleted(false);
      currentChunkIndexRef.current = saved.chunkIndex;
      lastAudioTimeRef.current = saved.audioTime;
      updateElapsed(saved.elapsedSeconds);
      updateProgress(saved.progressPercent);
      setRecoveryNotice(null);
      updateStatus('paused');
    } else {
      lockedCompletedRef.current = false;
      setLockedCompleted(false);
      currentChunkIndexRef.current = 0;
      lastAudioTimeRef.current = 0;
      updateElapsed(0);
      updateProgress(0);
      setRecoveryNotice(null);
      updateStatus('idle');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionKey, isActive]);

  // Resume automatically when returning to browser tab during active playback
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const onVisibilityChange = () => {
      if (!document.hidden && shouldBePlayingRef.current) {
        if (usingAudioElementRef.current && audioElRef.current && audioElRef.current.paused && !audioElRef.current.ended) {
          audioElRef.current.play().catch(() => triggerAudioElementRecovery());
        } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
          const synth = window.speechSynthesis;
          if (synth.paused) {
            try {
              synth.resume();
            } catch {
              triggerSpeechRecovery();
            }
          } else if (!synth.speaking && !synth.pending && !transitionPendingRef.current) {
            triggerSpeechRecovery();
          }
        }
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, [triggerAudioElementRecovery, triggerSpeechRecovery]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      shouldBePlayingRef.current = false;
      stopAllAudioHardware();
    };
  }, [stopAllAudioHardware]);

  return {
    status,
    isPlaying: status === 'playing' || status === 'recovering',
    isLockedCompleted: lockedCompleted,
    progressPercent,
    elapsedSeconds,
    totalDurationSeconds,
    recoveryNotice,
    togglePlayPause,
    startSectionPlayback,
    restartTrack
  };
}
