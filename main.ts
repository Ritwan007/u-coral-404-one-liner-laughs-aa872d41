// Entry for make.fun competition "One-Liner Laughs"
// (u-coral-404-one-liner-laughs-aa872d41).
// Writes a single one-line joke (<=200 chars) to /output/entry.txt.
// Revised: fail loudly instead of writing an entry that would fail the gate.
// Revised again: name the output path once, so the gate check and the write
// cannot drift apart if the path ever changes.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked my GPS for the fastest route home and it said, 'Honestly? Therapy.'";

const OUTPUT_FILE = "/output/entry.txt";

const length = [...JOKE].length;
if (length < 1 || length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke is ${length} characters; the gate requires 1-200 non-blank characters.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_FILE, JOKE, "utf8");
console.log(`Wrote ${length} characters to ${OUTPUT_FILE}`);
