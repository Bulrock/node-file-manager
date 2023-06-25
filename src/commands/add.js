import { resolve } from 'path';
import { cwd } from 'process';
import { writeFile } from 'fs/promises';

export default async function addHandler(fileName) {
  await writeFile(resolve(cwd(), fileName), '');
}