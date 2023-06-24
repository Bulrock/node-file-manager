import { chdir } from 'process';
import { resolve } from 'path';

export default function cdHandler(path) {
  const pathArr = path.split(/\\|\//);
  const transformedPath = resolve(...pathArr);

  chdir(transformedPath)
}