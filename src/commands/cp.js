import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { resolve, parse } from 'path';
import { EXEC_ERROR_MESSAGE, INVALID_INPUT_MESSGE } from '../constants/constants.js';

export default async function cpHandler([filePath, destPath]) {
  try {
    if(!filePath || !destPath) {
      console.error(INVALID_INPUT_MESSGE);
      return
    }
  
    const { base } = parse(filePath);
    const readableStream = createReadStream(resolve(filePath));
    const writeableStream = createWriteStream(resolve(destPath, base));

    await pipeline(readableStream, writeableStream);
  } catch (err) {
    console.error(EXEC_ERROR_MESSAGE);
  }
}