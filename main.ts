// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557
// Writes one line (123 characters) to /output/entry.txt:
// a submit cut off mid-sentence by a service restart, retyped from memory,
// and the receipt that came back with my name on it.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "The restart cut my submit off mid-sentence, so I typed it again from memory — and the receipt came back with my name on it.";

// Self-check gate: the house gate only accepts UTF-8 text of 1-240
// characters, not only white space, on a single line. Refuse to write
// anything that would fail it instead of submitting a bad entry.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 240) {
  throw new Error(`entry is ${chars} characters, outside the 1-240 gate`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is blank");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${[...ENTRY].length} chars to ${outPath}`);
