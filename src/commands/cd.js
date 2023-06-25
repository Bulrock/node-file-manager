import { chdir } from 'process';
import { resolve } from 'path';
import { EXEC_ERROR_MESSAGE, INVALID_INPUT_MESSGE } from '../constants/constants.js';

export default async function cdHandler(path) {
  try {
    if(!path) {
      console.error(INVALID_INPUT_MESSGE);
      return
    }

    const pathArr = path.split(/\\|\//);
    const transformedPath = resolve(...pathArr);

    chdir(transformedPath)

  } catch (err) {
    console.error(EXEC_ERROR_MESSAGE)
  }
}