import { resolve } from 'path';
import { cwd } from 'process';
import { writeFile } from 'fs/promises';
import { EXEC_ERROR_MESSAGE, INVALID_INPUT_MESSGE } from '../constants/constants.js';

export default async function addHandler(fileName) {
  try {
    if(!fileName) {
      console.error(INVALID_INPUT_MESSGE);
      return
    }

    await writeFile(resolve(cwd(), fileName), '');
  } catch {
    console.error(EXEC_ERROR_MESSAGE)
  }
}