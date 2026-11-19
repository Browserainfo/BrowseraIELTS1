/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ListeningChunk {
  index: number;
  speaker: string;
  text: string;
  pitch: number;
  weight: number;
  cumulativeStartWeight: number;
}

export type AudioPlaybackStatus =
  | 'idle'
  | 'playing'
  | 'paused'
  | 'recovering'
  | 'completed'
  | 'error';

const KNOWN_PLACEHOLDER_AUDIO_URLS = [
  'cdn.freesound.org/previews/387/387232_1474204-lq.mp3'
];

export function isRealAudioUrl(url?: string): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (!trimmed) return false;
  return !KNOWN_PLACEHOLDER_AUDIO_URLS.some(placeholder => trimmed.includes(placeholder));
}

export function formatAudioTime(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(Number.isFinite(totalSeconds) ? totalSeconds : 0));
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

/**
 * Splits a single long sentence into <= maxLen character segments at natural boundaries
 * to prevent Chrome/Windows SpeechSynthesis from silently freezing on long utterances (~15s limit).
 */
export function splitTextSafely(text: string, maxLen: number = 155): string[] {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (!cleaned) return [];
  if (cleaned.length <= maxLen) return [cleaned];

  const segments: string[] = [];
  let remaining = cleaned;

  while (remaining.length > maxLen) {
    const slice = remaining.slice(0, maxLen + 1);
    let splitAt = -1;

    // Prefer sentence punctuation, then clause punctuation, then whitespace
    for (const punct of ['. ', '! ', '? ', '; ', ': ', ', ', '—', ' - ']) {
      const idx = slice.lastIndexOf(punct);
      if (idx >= Math.floor(maxLen * 0.45)) {
        splitAt = idx + punct.trimEnd().length;
        break;
      }
    }

    if (splitAt <= 0) {
      const spaceIdx = slice.lastIndexOf(' ');
      splitAt = spaceIdx >= Math.floor(maxLen * 0.4) ? spaceIdx : maxLen;
    }

    const head = remaining.slice(0, splitAt).trim();
    if (head) segments.push(head);
    remaining = remaining.slice(splitAt).trim();
  }

  if (remaining) segments.push(remaining);
  return segments;
}

/**
 * Splits a spoken dialogue turn into sentences without falsely splitting after
 * titles/honorifics (Dr., Mr., Mrs., Ms., Prof.) or abbreviations.
 */
function splitIntoSentencesSafe(spokenLine: string): string[] {
  const DOT_PLACEHOLDER = '__ABBR_DOT__';
  const protectedLine = spokenLine.replace(
    /\b(Dr|Mr|Mrs|Ms|Prof|Sr|Jr|St|No|Fig|approx|vs|etc|e\.g|i\.e)\./gi,
    (_, abbr) => `${abbr}${DOT_PLACEHOLDER}`
  );

  return protectedLine
    .split(/(?<=[.!?])\s+/)
    .map(s => s.split(DOT_PLACEHOLDER).join('.').trim())
    .filter(Boolean);
}

/**
 * Converts a listening section transcript into speaker-aware short utterances,
 * keeping every word intact while avoiding tiny micro-fragments that cause Chromium TTS drops.
 */
export function buildListeningChunks(transcript: string, fallbackText?: string): ListeningChunk[] {
  const rawSource = (transcript || fallbackText || '').trim();
  if (!rawSource) return [];

  const lines = rawSource
    .split(/\r?\n+/)
    .map(l => l.trim())
    .filter(Boolean);

  const speakerPitches = new Map<string, number>();
  const pitchPool = [1.0, 1.07, 0.93, 1.12];

  const rawSegments: { speaker: string; text: string; pitch: number }[] = [];

  for (const line of lines) {
    // Skip bracketed track metadata headers such as "[Audio Track 1 - Section 1: ...]"
    if (/^\[.*\]$/.test(line)) {
      continue;
    }

    const speakerMatch = line.match(/^([A-Za-z][A-Za-z0-9.\s'-]{1,30}):\s+(.+)$/);
    let speaker = 'Narrator';
    let spokenLine = line;

    if (speakerMatch) {
      speaker = speakerMatch[1].trim();
      spokenLine = speakerMatch[2].trim();
    }

    if (!speakerPitches.has(speaker)) {
      speakerPitches.set(speaker, pitchPool[speakerPitches.size % pitchPool.length]);
    }
    const pitch = speakerPitches.get(speaker) || 1.0;

    // Split on true sentence endings first, then enforce max chunk length <= 155 chars
    const sentences = splitIntoSentencesSafe(spokenLine);

    for (const sentence of sentences) {
      const subParts = splitTextSafely(sentence, 155);
      for (const part of subParts) {
        const prev = rawSegments[rawSegments.length - 1];
        // Merge tiny trailing/orphan fragments with previous chunk of same speaker when within 155 chars
        if (
          prev &&
          prev.speaker === speaker &&
          part.length < 24 &&
          prev.text.length + 1 + part.length <= 155
        ) {
          prev.text = `${prev.text} ${part}`;
        } else {
          rawSegments.push({ speaker, text: part, pitch });
        }
      }
    }
  }

  // Fallback if all lines were bracket headers
  if (rawSegments.length === 0 && fallbackText) {
    for (const part of splitTextSafely(fallbackText, 155)) {
      rawSegments.push({ speaker: 'Narrator', text: part, pitch: 1.0 });
    }
  }

  let cumulative = 0;
  return rawSegments.map((seg, idx) => {
    const weight = Math.max(12, seg.text.length);
    const chunk: ListeningChunk = {
      index: idx,
      speaker: seg.speaker,
      text: seg.text,
      pitch: seg.pitch,
      weight,
      cumulativeStartWeight: cumulative
    };
    cumulative += weight;
    return chunk;
  });
}

export function getTotalChunkWeight(chunks: ListeningChunk[]): number {
  if (chunks.length === 0) return 0;
  const last = chunks[chunks.length - 1];
  return last.cumulativeStartWeight + last.weight;
}

/**
 * Estimates realistic playback duration in seconds for chunked speech synthesis
 * so elapsedSeconds, totalDurationSeconds, and progressPercent stay synchronized.
 */
export function estimateSpeechDurationSeconds(chunks: ListeningChunk[], rate: number = 0.96): number {
  if (!Array.isArray(chunks) || chunks.length === 0) return 0;
  const safeRate = Math.max(0.5, Math.min(2.0, rate));
  const totalSec = chunks.reduce((acc, chunk) => {
    const spokenSec = (Math.max(8, chunk.text.length) * 0.072) / safeRate;
    const pauseGapSec = 0.14;
    return acc + spokenSec + pauseGapSec;
  }, 0);
  return Math.max(10, Math.round(totalSec));
}

/**
 * Estimates expected maximum duration (ms) for a speech chunk before the watchdog
 * treats it as frozen/stalled.
 */
export function getChunkStallTimeoutMs(chunkText: string, rate: number = 0.96): number {
  const safeRate = Math.max(0.5, Math.min(2.0, rate));
  const estimatedMs = ((Math.max(15, chunkText.length) * 85) / safeRate) * 2.2 + 6500;
  return Math.max(14000, Math.min(35000, Math.round(estimatedMs)));
}

/**
 * Computes smooth 0-100 progress across chunks without jumping backward.
 */
export function calculateChunkProgressPercent(
  chunks: ListeningChunk[],
  currentIndex: number,
  chunkElapsedMs: number,
  status: AudioPlaybackStatus,
  previousPercent: number = 0
): number {
  if (status === 'completed') return 100;
  if (status === 'idle' && previousPercent === 0) return 0;
  const totalWeight = getTotalChunkWeight(chunks);
  if (totalWeight <= 0) return previousPercent;

  if (currentIndex >= chunks.length) return 100;
  const current = chunks[Math.max(0, currentIndex)];
  if (!current) return previousPercent;

  const estChunkMs = Math.max(1200, current.text.length * 72);
  const intraRatio = Math.min(0.92, Math.max(0, chunkElapsedMs / estChunkMs));
  const coveredWeight = current.cumulativeStartWeight + current.weight * intraRatio;
  const pct = Math.min(99, Math.max(0, Math.round((coveredWeight / totalWeight) * 1000) / 10));

  return Math.max(previousPercent, pct);
}

/**
 * Orders available English speech synthesis voices, prioritizing en-GB/en-AU and local voices
 * for reliable Windows Chrome/Edge playback and clean voice fallback without dropping chunks.
 */
export function buildOrderedEnglishVoicePool(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice[] {
  if (!Array.isArray(voices) || voices.length === 0) return [];

  const englishVoices = voices.filter(v => (v.lang || '').toLowerCase().startsWith('en'));
  const pool = englishVoices.length > 0 ? englishVoices : voices;

  return [...pool].sort((a, b) => {
    const score = (v: SpeechSynthesisVoice) => {
      const lang = (v.lang || '').toLowerCase();
      let s = 0;
      if (lang.includes('gb') || lang.includes('au')) s += 4;
      else if (lang.startsWith('en')) s += 2;
      if (v.localService) s += 1;
      return s;
    };
    return score(b) - score(a);
  });
}

/**
 * Picks preferred English voices for Listening sections (British/Australian preferred).
 */
export function pickPreferredVoices(
  voices: SpeechSynthesisVoice[],
  fallbackOffset: number = 0
): {
  primary?: SpeechSynthesisVoice;
  secondary?: SpeechSynthesisVoice;
} {
  const ordered = buildOrderedEnglishVoicePool(voices);
  if (ordered.length === 0) return {};

  const primaryIdx = Math.abs(fallbackOffset) % ordered.length;
  const primary = ordered[primaryIdx];
  const secondary = ordered[(primaryIdx + 1) % ordered.length] || primary;

  return { primary, secondary };
}
