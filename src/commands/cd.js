import { chdir } from 'process';
import { resolve } from 'path';

export default function cdHandler(path) {
  const pathArr = path.split(/\W/);
  const transformedPath = resolve(...pathArr);

  chdir(transformedPath)
}