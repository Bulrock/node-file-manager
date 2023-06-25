import readline from 'readline';
import processCommand from './commandProcessor.js';
import { pwd } from "./pwdService.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export default async function promptCommand() {
  rl.question('', async (command) => {
    try {
      await processCommand(command);
    } catch (err) {
      console.error(err.message)
    }

    promptCommand();
    pwd();
  });
};