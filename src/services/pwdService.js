import { cwd } from 'process';
import os from 'os';

export const pwd = () => {
  console.log(`${os.EOL}You are currently in ${cwd()}`);
}