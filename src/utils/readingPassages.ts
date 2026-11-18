/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { QuestionItem, ReadingPassage } from '../types';

export interface PassageQuestionRange {
  start: number;
  end: number;
}

/**
 * Computes the actual start and end question numbers for a Reading passage/section
 * based on its assigned questions (handles Academic 1-13/14-26/27-40 AND GT 1-14/15-27/28-40).
 */
export function getPassageQuestionRange(
  passage: Pick<ReadingPassage, 'questions'> | undefined,
  passageIndex: number,
  allPassages: Pick<ReadingPassage, 'questions'>[]
): PassageQuestionRange {
  const questions: QuestionItem[] = passage?.questions || [];
  if (questions.length > 0) {
    let min = questions[0].number;
    let max = questions[0].number;
    for (const q of questions) {
      if (q.number < min) min = q.number;
      if (q.number > max) max = q.number;
    }
    return { start: min, end: max };
  }

  // Fallback cumulative offset if a passage lacks per-passage question metadata
  let offset = 1;
  for (let i = 0; i < passageIndex; i++) {
    offset += (allPassages[i]?.questions?.length || 13);
  }
  return { start: offset, end: offset + 12 };
}

/**
 * Finds the 0-based index of the passage/section containing the given question number.
 */
export function findPassageIndexForQuestion(
  allPassages: Pick<ReadingPassage, 'questions'>[],
  questionNumber: number
): number {
  if (!Array.isArray(allPassages) || allPassages.length === 0) return 0;

  // Direct question ownership match
  for (let i = 0; i < allPassages.length; i++) {
    const qs = allPassages[i]?.questions;
    if (Array.isArray(qs) && qs.some(q => q.number === questionNumber)) {
      return i;
    }
  }

  // Range fallback if question number is between section bounds
  for (let i = 0; i < allPassages.length; i++) {
    const range = getPassageQuestionRange(allPassages[i], i, allPassages);
    if (questionNumber >= range.start && questionNumber <= range.end) {
      return i;
    }
  }

  return 0;
}
