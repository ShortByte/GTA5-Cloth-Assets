import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { sync } from 'glob';
import { dirname, join, resolve } from 'path';
import sharp from 'sharp';

const __dirname = import.meta.dirname;

function ensureDirectory(filePath) {
  const dirName = dirname(filePath);

  if (!(existsSync(dirName))) {
    mkdirSync(dirName, {
      recursive: true
    });
  }
}

async function main() {
  const scriptDir = __dirname;
  const inputDir = resolve(scriptDir, 'assets-raw');
  const outputDir = resolve(scriptDir, 'assets');

  const files = sync('**/*.webp', { cwd: inputDir, nodir: true });

  console.log(files);

  let fileCount = 0;

  for (const file of files) {
    const filePath = join(inputDir, file);

    const relativePath = file.replace(/\.webp$/i, '');
    const outputFilePath = join(outputDir, relativePath + '.webp');

    ensureDirectory(outputFilePath);

    const data = await sharp(filePath).webp({ quality: 70 }).toBuffer();

    fileCount++;
    writeFileSync(outputFilePath, data);
    console.log(`[${fileCount}/${files.length}] Processed ${file}`);
  }
}

main()
  .then(() => {
    console.log('done');
  })
  .catch(console.error);