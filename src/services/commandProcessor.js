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

export default function processCommand(command) {
  const [cmd, ...args] = command.split(' ');

  switch (cmd) {
    case 'add':
      addHandler();
      break;
    case 'cat':
      catHandler(...args);
      break;
    case 'cd':
      cdHandler(...args);
      break;
    case 'compress':
      compressHandler();
      break;
    case 'cp':
      cpHandler();
      break;
    case 'decompress':
      decompressHandler();
      break;
    case 'hash':
      hashHandler();
      break;
    case 'ls':
      lsHandler();
      break;
    case 'mv':
      mvHandler();
      break;
    case 'os':
      osHandler();
      break;
    case 'rm':
      rmHandler();
      break;
    case 'rn':
      rnHandler();
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
