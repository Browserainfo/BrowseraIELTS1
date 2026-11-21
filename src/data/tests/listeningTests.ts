/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../types';
import { LISTENING_BATCH_01 } from './listening/batch01';
import { LISTENING_BATCH_02 } from './listening/batch02';
import { LISTENING_BATCH_03 } from './listening/batch03';
import { LISTENING_BATCH_04 } from './listening/batch04';
import { LISTENING_BATCH_05 } from './listening/batch05';
import { LISTENING_BATCH_06 } from './listening/batch06';
import { LISTENING_BATCH_07 } from './listening/batch07';
import { LISTENING_BATCH_08 } from './listening/batch08';
import { LISTENING_BATCH_09 } from './listening/batch09';
import { LISTENING_BATCH_10 } from './listening/batch10';

export const LISTENING_TESTS: TestItem[] = [
  ...LISTENING_BATCH_01,
  ...LISTENING_BATCH_02,
  ...LISTENING_BATCH_03,
  ...LISTENING_BATCH_04,
  ...LISTENING_BATCH_05,
  ...LISTENING_BATCH_06,
  ...LISTENING_BATCH_07,
  ...LISTENING_BATCH_08,
  ...LISTENING_BATCH_09,
  ...LISTENING_BATCH_10
];
