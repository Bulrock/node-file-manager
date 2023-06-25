import { exit } from 'process';
import {
  addHandler,
  catHandler,
  cdHandler,
  compressHandler,
  cpHandler,
  decompressHandler,
  hashHandler,
  lsHandler,
  mvHandler,
  osHandler,
  rmHandler,
  rnHandler,
  upHandler } from '../commands/index.js';
import { INVALID_INPUT_MESSGE } from '../constants/constants.js';

export default async function processCommand(command) {
  const [cmd, ...args] = command.split(' ');

  switch (cmd) {
    case 'add':
      await addHandler(...args);
      break;
    case 'cat':
      await catHandler(...args);
      break;
    case 'cd':
      await cdHandler(...args);
      break;
    case 'compress':
      await compressHandler(args);
      break;
    case 'cp':
      await cpHandler(args);
      break;
    case 'decompress':
      await decompressHandler(args);
      break;
    case 'hash':
      await hashHandler(...args);
      break;
    case 'ls':
      await lsHandler();
      break;
    case 'mv':
      await mvHandler(args);
      break;
    case 'os':
      osHandler(...args);
      break;
    case 'rm':
      await rmHandler(...args);
      break;
    case 'rn':
      await rnHandler(args);
      break;
    case 'up':
      upHandler();
      break;
    case '.exit':
      exit(1);
    default:
      console.log(INVALID_INPUT_MESSGE);
  }
};
