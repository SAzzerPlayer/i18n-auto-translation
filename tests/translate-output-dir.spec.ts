process.argv.push('--key=test');
process.argv.push('--apiProvider=deepl-free');
process.argv.push('--from=en');
process.argv.push('--to=es');
process.argv.push('--dirPath=./tests/i18n');
process.argv.push('--outputDirPath=./tests/output');

import { DeepLFreeAPI } from '../src/translate/providers/deepl-free-api';
import { existsSync, rmSync } from 'fs';
import { join } from 'path';

describe('Translate', () => {
  it('should throw error, filePath or dirPath not provided', async () => {
    const outputPath = join(__dirname, './output');
    if (existsSync(outputPath)) {
      rmSync(outputPath, { recursive: true, force: true });
    }
    await new DeepLFreeAPI().translate();
    const fileExists = existsSync(join(outputPath, 'en.json'));
    expect(fileExists).toBe(true);
  });
});
