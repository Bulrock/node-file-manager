import { createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { parse, resolve } from 'path';
import { EXEC_ERROR_MESSAGE, INVALID_INPUT_MESSGE } from '../constants/constants.js';

export default async function compressHandler([pathToFile, pathToDecompressedFile]) {
  try{
    if(!pathToFile || !pathToDecompressedFile) {
      console.error(INVALID_INPUT_MESSGE);
      return
    }

    const { name } = parse(pathToFile);

    const readableStream = createReadStream(resolve(pathToFile));
    const writableStream = createWriteStream(resolve(pathToDecompressedFile, name));
    const brotliDecompress = createBrotliDecompress();

    readableStream.pipe(brotliDecompress).pipe(writableStream);

  } catch (err){
    console.error(EXEC_ERROR_MESSAGE)
  }
}