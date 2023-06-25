import { unlink } from 'fs/promises';
import { resolve } from 'path';
import { EXEC_ERROR_MESSAGE, INVALID_INPUT_MESSGE } from '../constants/constants.js';

export default async function rmHandler(removedFile) {
  try {
    if(!removedFile) {
      console.error(INVALID_INPUT_MESSGE);
      return
    }

    const removedFilePath = resolve(removedFile);

    await unlink(removedFilePath);
  } catch (err) {
    console.error(EXEC_ERROR_MESSAGE);
  }
}