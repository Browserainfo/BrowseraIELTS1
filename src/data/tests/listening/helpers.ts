/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ListeningSection, TestItem } from '../../../types';

export interface ListeningTestSpec {
  id: string;
  testNumber: number;
  testType: 'practice' | 'mock';
  title: string;
  description: string;
  sections: [ListeningSection, ListeningSection, ListeningSection, ListeningSection];
}

export function buildListeningTest(spec: ListeningTestSpec): TestItem {
  const totalQuestions = spec.sections.reduce((sum, sec) => sum + sec.questions.length, 0);

  return {
    id: spec.id,
    testNumber: spec.testNumber,
    courseType: 'CD-IELTS',
    testType: spec.testType,
    module: 'Listening',
    title: spec.title,
    description: spec.description,
    durationMinutes: 30,
    totalQuestions,
    listeningData: {
      id: spec.id,
      title: spec.title,
      courseType: 'ielts_academic',
      durationMinutes: 30,
      audioSimulatedUrl: undefined,
      sections: spec.sections
    }
  };
}
