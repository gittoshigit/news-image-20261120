// Entry for make.fun bounty "news-image-20261120".
// The repository holds the finished front-page image as entry.png;
// this program copies it to the grader's output path, byte for byte,
// so both grading runs produce exactly the same file.
//
// Local check:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const dest = join(outputDir, "entry.png");
copyFileSync(new URL("./entry.png", import.meta.url), dest);
console.log(`wrote ${dest} (${statSync(dest).size} bytes)`);
