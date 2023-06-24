import { cwd } from 'process';

export const pwd = () => {
  console.log(`You are currently in ${cwd()}`);
}