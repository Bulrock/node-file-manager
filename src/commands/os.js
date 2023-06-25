import os from 'os';
import { EXEC_ERROR_MESSAGE, INVALID_INPUT_MESSGE } from '../constants/constants.js';

export default function osHandler(param) {
  try {
    const parsedDaram = param.slice(2);

    if(!parsedDaram) {
      console.error(INVALID_INPUT_MESSGE);
      return
    }

    switch (parsedDaram) {
      case 'EOL':
        console.log(`${JSON.stringify(os.EOL)}`);
        break;
      case 'cpus':
        console.log(`Overall amount of CPUS: ${os.cpus().length}`);
        for(let cpu of os.cpus()) {
          console.log(cpu.model);
        }
        break;
      case 'homedir':
        console.log(os.homedir());
        break;
      case 'username':
        console.log(os.userInfo().username);
        break;
      case 'architecture':
        console.log(os.arch());
        break;
      default:
        console.error(INVALID_INPUT_MESSGE);
    }
  } catch {
    console.error(EXEC_ERROR_MESSAGE);
  }
}