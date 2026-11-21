/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../types';
import { READING_BATCH_01 } from './reading/batch01';
import { READING_BATCH_02 } from './reading/batch02';
import { READING_BATCH_03 } from './reading/batch03';
import { READING_BATCH_04 } from './reading/batch04';
import { READING_BATCH_05 } from './reading/batch05';
import { READING_BATCH_06 } from './reading/batch06';
import { READING_BATCH_07 } from './reading/batch07';
import { READING_BATCH_08 } from './reading/batch08';
import { READING_BATCH_09 } from './reading/batch09';
import { READING_BATCH_10 } from './reading/batch10';

export const READING_TESTS: TestItem[] = [
  ...READING_BATCH_01,
  ...READING_BATCH_02,
  ...READING_BATCH_03,
  ...READING_BATCH_04,
  ...READING_BATCH_05,
  ...READING_BATCH_06,
  ...READING_BATCH_07,
  ...READING_BATCH_08,
  ...READING_BATCH_09,
  ...READING_BATCH_10
];
