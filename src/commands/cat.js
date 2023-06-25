import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { EXEC_ERROR_MESSAGE } from '../constants/constants.js';

export default async function catHandler(filePath) {
    try {
      const content = await readFile(resolve(filePath), {encoding: 'utf8'});
      console.log(content);
    } catch (err) {
      console.error(EXEC_ERROR_MESSAGE)
    }
}