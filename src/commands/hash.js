import { readFile } from 'fs/promises';
import { createHmac } from 'crypto';
import { resolve } from 'path';
import { EXEC_ERROR_MESSAGE, INVALID_INPUT_MESSGE } from '../constants/constants.js';

export default async function hashHandler(filePath) {
  try {
    if(!filePath) {
      console.error(INVALID_INPUT_MESSGE);
      return
    }

    const secret = await readFile(resolve(filePath), {encoding: 'utf8'})
    const hash = createHmac('sha256', secret)
                .digest('hex');
    console.log(hash);
  } catch (err){
    console.error(err);
    console.error(EXEC_ERROR_MESSAGE);
  }
}