import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { parse, resolve } from 'path';
import { EXEC_ERROR_MESSAGE, INVALID_INPUT_MESSGE } from '../constants/constants.js';

export default async function compressHandler([pathToFile, pathToCompressedFile]) {
  try{
    if(!pathToFile || !pathToCompressedFile) {
      console.error(INVALID_INPUT_MESSGE);
      return
    }

    const { base } = parse(pathToFile);
    const compressedFileName = `${base}.br`;
    
    const readableStream = createReadStream(resolve(pathToFile));
    const writableStream = createWriteStream(resolve(pathToCompressedFile, compressedFileName));
    const brotli = createBrotliCompress();

    readableStream.pipe(brotli).pipe(writableStream);

  } catch (err){
    console.error(EXEC_ERROR_MESSAGE)
  }
}