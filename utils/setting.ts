import fs from 'fs';
import { join } from 'path';

const settingsDirectory = join(
  process.cwd(),
  process.platform === 'win32' ? 'contents' : 'contents'
);

export function getSettingSlugs() {
  return fs.readdirSync(settingsDirectory);
}

export function getSettingByName(name: string) {
  const realSlug = name.replace(/\.json$/, '');
  const fullPath = join(settingsDirectory, `${realSlug}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const jsonContents = fileContents && JSON.parse(fileContents);
  return jsonContents;
}

export function getSettings(query = '*') {
  const settings: {
    [fileName: string]: any;
  } = {};

  const settingNames = getSettingSlugs();

  settingNames.map((name) => {
    const settingData = getSettingByName(name);
    const realName = name.replace(/\.json$/, '');

    settings[realName] = settingData;
    return name;
  });

  if (query === '*') {
    return settings;
  }

  return settings[query];
}
