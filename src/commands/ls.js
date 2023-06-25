import { cwd } from 'process';
import { join } from 'path';
import { readdir } from 'fs/promises';
import { lstatSync } from 'fs';

export default async function lsHandler() {
  const files = await readdir(cwd(), {withFileTypes: true});

  const folders = [];
  const filesList = [];

  files.forEach((file) => {
    if (file.isDirectory()) {
      folders.push(file.name);
    } else {
      filesList.push(file.name);
    }
  });

  folders.sort();
  filesList.sort();

  const content = [...folders, ...filesList];

  const parsedList = content.map((item) => ({ Name: item, Type: lstatSync(join(cwd(), item)).isDirectory() ? 'Folder' : 'File' }));

  console.table(parsedList);
}