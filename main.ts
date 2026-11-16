// ai-excited-01 entry (Node 22, standard library only).
// The image beside this file is copied, byte for byte, to the output
// directory as entry.png. The judge sees exactly those bytes.
//
// Run locally the way the grader does, with MAKEFUN_OUTPUT_DIR standing
// in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(join(here, 'entry.png'));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);

// Fail loudly rather than hand the grader a short or missing file.
const written = readFileSync(join(outDir, 'entry.png'));
if (written.length !== image.length || !written.equals(image)) {
  throw new Error('entry.png was not written whole');
}
console.error(`wrote entry.png (${image.length} bytes)`);
