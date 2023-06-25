import { homedir } from 'os';
import { chdir } from 'process';

import { greetUser, goodbyeUser } from "./services/greetService.js";
import { pwd } from "./services/pwdService.js";
import promptCommand from './services/promptService.js';

const userName = process.argv.slice(2)[0].replace('--user-name=', '');

chdir(homedir());

greetUser(userName);

pwd();

promptCommand();

process.on('exit', () => {
  goodbyeUser(userName);
})
