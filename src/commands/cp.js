import { cp } from 'fs/promises';
import { resolve } from 'path';
import { EXEC_ERROR_MESSAGE, INVALID_INPUT_MESSGE } from '../constants/constants.js';

export default async function cpHandler([filePath, destPath]) {
  try {
    if(!filePath || !destPath) {
      console.error(INVALID_INPUT_MESSGE);
      return
    }

    await cp(resolve(filePath), resolve(destPath), { recursive: true, force: false, errorOnExist: true });
  } catch (err) {
    console.error(EXEC_ERROR_MESSAGE);
  }
}