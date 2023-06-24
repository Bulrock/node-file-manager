import { homedir } from 'os';
import { cwd, chdir } from 'process';

export default function upHandler() {
  if(cwd() === homedir()) return;

  chdir('../');
}