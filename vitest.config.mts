import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import path from 'path';
import { readdirSync } from 'fs';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: "src/__tests__/setup/setupTests.ts",
  },
  resolve: {
    alias: getAbsolutePathAliases(),
  },
});


function getAbsolutePathAliases() {
  const absolutePathAliases: { [key: string]: string } = {};
  // Root resources folder
  const srcPath = path.resolve('./src/');
  // Ajust the regex here to include .vue, .js, .jsx, etc.. files from the resources/ folder
  const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map((dirent) =>
    dirent.name.replace(/(\.ts){1}(x?)/, '')
  );

  srcRootContent.forEach((directory) => {
    absolutePathAliases[directory] = path.join(srcPath, directory);
  });

  return absolutePathAliases;
}
