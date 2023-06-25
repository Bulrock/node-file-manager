import { rename } from 'fs/promises';
import { EXEC_ERROR_MESSAGE, INVALID_INPUT_MESSGE } from '../constants/constants.js';

export default async function rnHandler([oldPath, newPath]) {
  try {
    if(!oldPath || !newPath) {
      console.error(INVALID_INPUT_MESSGE);
      return
    }
    
    await rename(oldPath, newPath);
  } catch (err) {
    console.error(EXEC_ERROR_MESSAGE);
  }
}