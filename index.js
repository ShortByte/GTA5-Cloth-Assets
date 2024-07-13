import { readdir, stat, writeFile } from 'fs/promises';
import { join } from 'path';

const __dirname = import.meta.dirname;

const imageBaseUrl ='https://cdn.jsdelivr.net/gh/ShortByte/GTA5-Cloth-Assets'; // 'http://127.0.0.1:5500';

const assetFolders = await readdir(join(__dirname, 'assets'), {
  withFileTypes: true
});

assetFolders.filter((file) => file.isDirectory()).forEach(async (directory) => {
  const assetsPath = join(directory.parentPath, directory.name);
  const subFolders = await readdir(assetsPath);

  if (subFolders.includes('.no-genders')) {
    const components = subFolders.filter((folder) => !(folder === '.no-genders'));

    const jsonFile = `${directory.name}.json`;
    const data = {};

    for (let component of components) {
      const componentPath = join(assetsPath, component);
      const componentFiles = await readdir(componentPath);

      const items = [];

      for (let file of componentFiles) {
        const stats = await stat(join(componentPath, file));

        items.push({
          index: parseInt(file.split('.')[0]),
          name: file,
          url: `${imageBaseUrl}/assets/${directory.name}/${component}/${file}`,
          size: stats.size
        });
      }
      data[component] = items.sort((a, b) => a.index - b.index);
    }
    await writeFile(join(__dirname, 'json-files', jsonFile), JSON.stringify(data, undefined, 2), 'utf-8');
    return;
  }

  for (let genderFolder of subFolders) {
    const jsonFile = `${directory.name}-${genderFolder}.json`;
    const data = {};

    const components = await readdir(join(assetsPath, genderFolder));

    for (let component of components) {
      const componentPath = join(assetsPath, genderFolder, component);
      const componentFiles = await readdir(componentPath);

      const items = [];

      for (let file of componentFiles) {
        const stats = await stat(join(componentPath, file));

        items.push({
          index: parseInt(file.split('.')[0]),
          name: file,
          url: `${imageBaseUrl}/assets/${directory.name}/${genderFolder}/${component}/${file}`,
          size: stats.size
        });
      }
      data[component] = items.sort((a, b) => a.index - b.index);
    }

    await writeFile(join(__dirname, 'json-files', jsonFile), JSON.stringify(data, undefined, 2), 'utf-8');
  }
});
