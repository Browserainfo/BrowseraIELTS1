/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  buildListeningChunks,
  buildOrderedEnglishVoicePool,
  calculateChunkProgressPercent,
  estimateSpeechDurationSeconds,
  formatAudioTime,
  getChunkStallTimeoutMs,
  isRealAudioUrl,
  pickPreferredVoices,
  splitTextSafely
} from './listeningAudio';
import { LISTENING_TESTS } from '../data/tests/listeningTests';
import { GT_READING_TESTS } from '../data/tests/gtReadingTests';
import { READING_TESTS } from '../data/tests/readingTests';
import { findPassageIndexForQuestion, getPassageQuestionRange } from './readingPassages';

let passed = 0;
let failed = 0;

function assert(condition: boolean, name: string, details?: string) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${name}`);
  } else {
    failed++;
    console.error(`  ✗ FAIL: ${name}${details ? ` (${details})` : ''}`);
  }
}

console.log('Running: Listening Section Playback, Question Coverage & GT Passage Range Tests');

console.log('\n--- SUITE 1: URL FILTERING & TIME FORMATTING ---');
assert(
  !isRealAudioUrl('https://cdn.freesound.org/previews/387/387232_1474204-lq.mp3'),
  'Rejects known placeholder freesound preview URL'
);
assert(!isRealAudioUrl(''), 'Rejects empty URL');
assert(!isRealAudioUrl(undefined), 'Rejects undefined URL');
assert(
  isRealAudioUrl('https://cdn.example.com/audio/ielts_test1_sec1.mp3'),
  'Accepts genuine audio stream URL'
);
assert(formatAudioTime(0) === '00:00', 'Formats 0 seconds as 00:00');
assert(formatAudioTime(65) === '01:05', 'Formats 65 seconds as 01:05');
assert(formatAudioTime(240) === '04:00', 'Formats 240 seconds as 04:00');
assert(formatAudioTime(-10) === '00:00', 'Clamps negative seconds safely to 00:00');

console.log('\n--- SUITE 2: SAFE CHUNK SPLITTING, ABBREVIATION PROTECTION & SPEAKERS ---');
const longSentence =
  'Welcome candidates to Browsera Education and Examination Services where today we will review the extended library registration rules, weekend laboratory hours, archival research policies, and equipment loan deposits across all main campus buildings.';
const splitParts = splitTextSafely(longSentence, 155);
assert(splitParts.length >= 2, 'Splits long sentences into multiple safe chunks');
assert(splitParts.every(p => p.length <= 155), 'Every split chunk respects <= 155 char cap');

const honorificTranscript = `[Audio Track 3 - Section 3]
Officer: Thank you, Mr. Harrison. Your room is B-12.
Maya: Yes, Dr. Patterson. We confirmed four hundred and fifty verified responses.`;
const honorificChunks = buildListeningChunks(honorificTranscript, 'Fallback');
assert(
  honorificChunks.some(c => c.text.includes('Mr. Harrison')),
  'Preserves "Mr. Harrison" inside a single chunk without abbreviation split'
);
assert(
  honorificChunks.some(c => c.text.includes('Yes, Dr. Patterson.')),
  'Preserves "Yes, Dr. Patterson." together without splitting on Dr.'
);

const sampleTranscript = `[Audio Track 1 - Section 1: Inquiries]
Officer: Good morning, how can I help you?
Candidate: I would like to register for the wildlife talk on Thursday.`;
const chunks = buildListeningChunks(sampleTranscript, 'Fallback');
assert(chunks.length === 2, 'Strips bracketed metadata headers and retains dialogue lines');
assert(chunks[0].speaker === 'Officer' && chunks[1].speaker === 'Candidate', 'Parses speaker labels accurately');
assert(chunks[0].pitch !== chunks[1].pitch, 'Assigns distinct subtle pitch per speaker');

const fallbackChunks = buildListeningChunks('[Audio Track Only]', 'Scenario overview for listening section');
assert(fallbackChunks.length === 1 && fallbackChunks[0].speaker === 'Narrator', 'Uses fallback scenario when transcript has only headers');

console.log('\n--- SUITE 3: ALL 200 SECTIONS (50 TESTS x 4 SECTIONS) COVERAGE & CHRONOLOGICAL ORDER ---');
let totalSectionsChecked = 0;
let totalQuestionsChecked = 0;
let allSectionsValid = true;
let allQuestionsCovered = true;
let allSectionsChronological = true;
let allMcqsValid = true;
let maxChunkLenSeen = 0;
let minChunkLenSeen = Infinity;

for (const test of LISTENING_TESTS) {
  const sections = test.listeningData?.sections || [];
  if (sections.length !== 4) {
    allSectionsValid = false;
    console.error(`Expected 4 sections in ${test.id}, got ${sections.length}`);
  }

  for (const sec of sections) {
    totalSectionsChecked++;
    const secChunks = buildListeningChunks(sec.transcript, sec.audioScenario);
    const estSec = estimateSpeechDurationSeconds(secChunks, 0.96);
    if (secChunks.length === 0 || sec.questions.length !== 10 || estSec < 30 || estSec > 300) {
      allSectionsValid = false;
      console.error(`Invalid section structure (${secChunks.length} chunks, ${sec.questions.length} qs, ${estSec}s) in ${test.id} sec ${sec.sectionNumber}`);
    }

    for (const c of secChunks) {
      if (c.text.length > maxChunkLenSeen) maxChunkLenSeen = c.text.length;
      if (c.text.length < minChunkLenSeen) minChunkLenSeen = c.text.length;
      if (c.text.length > 155) {
        allSectionsValid = false;
        console.error(`Oversized chunk (${c.text.length}) in ${test.id} sec ${sec.sectionNumber}`);
      }
    }

    // Verify every single one of the 10 questions has chronological [[Q#]] cues and complete audio coverage
    let prevCuePos = -1;
    let prevAnswerPos = -1;
    for (const q of sec.questions) {
      totalQuestionsChecked++;

      const cueChunk = secChunks.find(c => c.questionNumber === q.number);
      if (!cueChunk) {
        allQuestionsCovered = false;
        console.error(`Missing [[Q${q.number}]] cue chunk in ${test.id} sec ${sec.sectionNumber}`);
      } else {
        if (cueChunk.index < prevCuePos) {
          allSectionsChronological = false;
          console.error(`Out-of-order [[Q${q.number}]] cue in ${test.id} sec ${sec.sectionNumber}: chunk ${cueChunk.index} < prev ${prevCuePos}`);
        }
        prevCuePos = cueChunk.index;
      }

      if (q.type === 'multiple_choice') {
        const opts = q.options || [];
        const ansKey = String(q.correctAnswer).trim().toUpperCase();
        const matchesOpt = opts.some(opt => {
          const clean = opt.trim().toUpperCase();
          return clean === ansKey || clean.startsWith(`${ansKey}.`) || clean.startsWith(`${ansKey}:`) || clean.startsWith(`${ansKey} `);
        });
        if (opts.length !== 4 || !matchesOpt || !q.explanation?.trim()) {
          allMcqsValid = false;
          console.error(`Invalid MCQ Q${q.number} in ${test.id} sec ${sec.sectionNumber}`);
        }
      } else {
        const answers = (Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer]).map(a =>
          String(a).toLowerCase().trim()
        );
        let matchedIndex = -1;

        for (let i = Math.max(0, prevAnswerPos); i < secChunks.length; i++) {
          const single = secChunks[i].text.toLowerCase();
          const pair = i + 1 < secChunks.length ? `${single} ${secChunks[i + 1].text.toLowerCase()}` : single;
          if (answers.some(a => single.includes(a) || pair.includes(a))) {
            matchedIndex = i;
            break;
          }
        }

        if (matchedIndex === -1) {
          const anywhere = secChunks.findIndex((c, i) => {
            const single = c.text.toLowerCase();
            const pair = i + 1 < secChunks.length ? `${single} ${secChunks[i + 1].text.toLowerCase()}` : single;
            return answers.some(a => single.includes(a) || pair.includes(a));
          });
          if (anywhere === -1) {
            allQuestionsCovered = false;
            console.error(`Missing Q${q.number} (${q.correctAnswer}) in ${test.id} sec ${sec.sectionNumber}`);
          } else {
            allSectionsChronological = false;
            console.error(`Out-of-order Q${q.number} in ${test.id} sec ${sec.sectionNumber}: found at chunk ${anywhere} < prevPos ${prevAnswerPos}`);
          }
        } else {
          prevAnswerPos = matchedIndex;
        }
      }
    }
  }
}

assert(totalSectionsChecked === 200 && totalQuestionsChecked === 2000, `Validated all ${totalSectionsChecked} sections & ${totalQuestionsChecked} questions across ${LISTENING_TESTS.length} Listening tests`);
assert(allSectionsValid && maxChunkLenSeen <= 155, `All 200 sections have 10 questions & safe chunks (len range: ${minChunkLenSeen}–${maxChunkLenSeen} chars)`);
assert(allQuestionsCovered && allMcqsValid, 'Every single one of the 2,000 Listening questions (Q1–Q40 x 50 tests) is valid & covered by its section audio chunks');
assert(allSectionsChronological, 'All 200 Listening sections cover Q1→Q10, Q11→Q20, Q21→Q30, Q31→Q40 in strict chronological audio order');
assert(estimateSpeechDurationSeconds([], 0.96) === 0, 'Empty chunks estimate 0s duration');

console.log('\n--- SUITE 4: WATCHDOG TIMEOUTS, MONOTONIC PROGRESS & VOICE FALLBACK ---');
const minTimeout = getChunkStallTimeoutMs('Hello.', 0.96);
const maxTimeout = getChunkStallTimeoutMs('x'.repeat(200), 0.7);
assert(minTimeout >= 14000 && minTimeout <= 35000, `Short chunk timeout within bounds (${minTimeout}ms)`);
assert(maxTimeout >= 14000 && maxTimeout <= 35000, `Long chunk timeout within bounds (${maxTimeout}ms)`);

assert(calculateChunkProgressPercent(chunks, 0, 0, 'idle', 0) === 0, 'Progress starts at 0 in idle state');
const midProgress = calculateChunkProgressPercent(chunks, 1, 800, 'playing', 40);
assert(midProgress >= 40 && midProgress <= 99, `Progress advances monotonically (${midProgress}%)`);
const recoveryProgress = calculateChunkProgressPercent(chunks, 0, 0, 'recovering', midProgress);
assert(recoveryProgress === midProgress, 'Progress never moves backward during recovery');
const errorProgress = calculateChunkProgressPercent(chunks, 0, 0, 'error', midProgress);
assert(errorProgress === midProgress, 'Progress freezes accurately during error interruption (never completes early)');
assert(calculateChunkProgressPercent(chunks, 1, 0, 'completed', midProgress) === 100, 'Progress reaches 100% only on completion');

const mockVoices = [
  { name: 'Google US English', lang: 'en-US', localService: false },
  { name: 'Microsoft Libby Online', lang: 'en-GB', localService: false },
  { name: 'Microsoft Hazel Local', lang: 'en-GB', localService: true },
  { name: 'Google AU English Male', lang: 'en-AU', localService: false }
] as SpeechSynthesisVoice[];
const pool = buildOrderedEnglishVoicePool(mockVoices);
assert(pool[0].name === 'Microsoft Hazel Local', 'Prioritizes local en-GB voice for Chrome/Edge stability');
const picked0 = pickPreferredVoices(mockVoices, 0);
const picked1 = pickPreferredVoices(mockVoices, 1);
assert(picked0.primary?.lang === 'en-GB' && picked1.primary?.name !== picked0.primary?.name, 'Voice fallback offset rotates cleanly to alternate voice without skipping chunks');
assert(Object.keys(pickPreferredVoices([])).length === 0, 'Handles empty voice list gracefully');

console.log('\n--- SUITE 5: GT & ACADEMIC READING PASSAGE QUESTION RANGES ---');
for (const gtTest of GT_READING_TESTS) {
  const passages = gtTest.readingData!.passages!;
  const r1 = getPassageQuestionRange(passages[0], 0, passages);
  const r2 = getPassageQuestionRange(passages[1], 1, passages);
  const r3 = getPassageQuestionRange(passages[2], 2, passages);
  assert(r1.start === 1 && r1.end === 14, `${gtTest.id} Section 1 range is Q1–14`);
  assert(r2.start === 15 && r2.end === 27, `${gtTest.id} Section 2 range is Q15–27`);
  assert(r3.start === 28 && r3.end === 40, `${gtTest.id} Section 3 range is Q28–40`);
  assert(findPassageIndexForQuestion(passages, 14) === 0, `${gtTest.id} Q14 resolves to GT Section 1 (index 0)`);
  assert(findPassageIndexForQuestion(passages, 15) === 1, `${gtTest.id} Q15 resolves to GT Section 2 (index 1)`);
  assert(findPassageIndexForQuestion(passages, 27) === 1, `${gtTest.id} Q27 resolves to GT Section 2 (index 1)`);
  assert(findPassageIndexForQuestion(passages, 28) === 2, `${gtTest.id} Q28 resolves to GT Section 3 (index 2)`);
}

const acPassages = READING_TESTS[0].readingData!.passages!;
const ar1 = getPassageQuestionRange(acPassages[0], 0, acPassages);
const ar2 = getPassageQuestionRange(acPassages[1], 1, acPassages);
const ar3 = getPassageQuestionRange(acPassages[2], 2, acPassages);
assert(ar1.start === 1 && ar1.end === 13, 'Academic Passage 1 range is Q1–13');
assert(ar2.start === 14 && ar2.end === 26, 'Academic Passage 2 range is Q14–26');
assert(ar3.start === 27 && ar3.end === 40, 'Academic Passage 3 range is Q27–40');
assert(findPassageIndexForQuestion(acPassages, 13) === 0 && findPassageIndexForQuestion(acPassages, 14) === 1, 'Academic Q13/Q14 map to Passages 1 and 2');
assert(findPassageIndexForQuestion(acPassages, 26) === 1 && findPassageIndexForQuestion(acPassages, 27) === 2, 'Academic Q26/Q27 map to Passages 2 and 3');

console.log(`\nListening & GT Passage Tests Summary: ${passed} passed, ${failed} failed`);
if (failed > 0) {
  process.exit(1);
}
