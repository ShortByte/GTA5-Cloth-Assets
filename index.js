import { readdir, writeFile } from 'fs/promises';
import { join } from 'path';

const __dirname = import.meta.dirname;

const imageBaseUrl = 'https://cdn.jsdelivr.net/gh/ShortByte/GTA5-Cloth-Assets';

const assetFolders = await readdir(join(__dirname, 'assets'), {
  withFileTypes: true
});

assetFolders.filter((file) => file.isDirectory()).forEach(async (directory) => {
  const assetsPath = join(directory.parentPath, directory.name);
  const subFolders = await readdir(assetsPath);

  for(let genderFolder of subFolders) {
    const jsonFile = `${directory.name}-${genderFolder}.json`;
    const data = {};

    const components = await readdir(join(assetsPath, genderFolder));

    for(let component of components) {
      const componentFiles = await readdir(join(assetsPath, genderFolder, component));

      data[component] = componentFiles.map((file) => ({
        index: parseInt(file.split('.')[0]),
        name: file,
        url: `${imageBaseUrl}/assets/${directory.name}/${genderFolder}/${component}/${file}`
      })).sort((a, b) => a.index - b.index);
    }

    await writeFile(join(__dirname, 'json-files', jsonFile), JSON.stringify(data, undefined, 2), 'utf-8');
  }
});
