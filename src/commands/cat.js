import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { EXEC_ERROR_MESSAGE, INVALID_INPUT_MESSGE } from '../constants/constants.js';

export default async function catHandler(filePath) {
  try {
    if(!filePath) {
      console.error(INVALID_INPUT_MESSGE);
      return
    }

    const content = await readFile(resolve(filePath), {encoding: 'utf8'});
    console.log(content);
  } catch (err) {
    console.error(EXEC_ERROR_MESSAGE)
  }
}