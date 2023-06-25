import readline from 'readline';
import processCommand from './commandProcessor.js';
import { pwd } from "./pwdService.js";
import { EXEC_ERROR_MESSAGE } from '../constants/constants.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export default function promptCommand() {
  rl.question('', (command) => {
    try {
      processCommand(command);
    } catch (err) {
      // console.error(err)
      console.error(EXEC_ERROR_MESSAGE)
    }
    pwd();

    promptCommand();
  });
};