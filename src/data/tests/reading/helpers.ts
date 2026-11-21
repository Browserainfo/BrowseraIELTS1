/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { QuestionItem, ReadingPassage, TestItem } from '../../../types';

export interface AcademicReadingSpec {
  id: string;
  testNumber: number;
  testType: 'practice' | 'mock';
  title: string;
  description: string;
  passages: [ReadingPassage, ReadingPassage, ReadingPassage];
}

export function buildAcademicReadingTest(spec: AcademicReadingSpec): TestItem {
  const [p1, p2, p3] = spec.passages;
  const allQuestions: QuestionItem[] = [...p1.questions, ...p2.questions, ...p3.questions];

  return {
    id: spec.id,
    testNumber: spec.testNumber,
    courseType: 'CD-IELTS',
    testType: spec.testType,
    module: 'Reading',
    title: spec.title,
    description: spec.description,
    durationMinutes: 60,
    totalQuestions: allQuestions.length,
    readingData: {
      id: spec.id,
      title: spec.title,
      courseType: 'ielts_academic',
      durationMinutes: 60,
      passageTitle: p1.title,
      passageSubtitle: p1.subtitle,
      passageText: p1.text,
      passages: [p1, p2, p3],
      questions: allQuestions
    }
  };
}
