import { existsSync, mkdirSync, readdirSync, copyFileSync } from 'fs';
import { join } from 'path';

function copySvelteFiles(src, dest) {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }

  const entries = readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      copySvelteFiles(srcPath, destPath);
    } else if (entry.isFile() && entry.name.endsWith('.svelte')) {
      copyFileSync(srcPath, destPath);
    }
  }
}

copySvelteFiles('src', 'dist/src');
