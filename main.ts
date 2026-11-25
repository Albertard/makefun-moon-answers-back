// The Moon Finally Answers Back — make.fun entry
// Writes exactly one line to /output/entry.txt: the Moon finally replying
// to the wishes, howls and late-night promises of everyone staring up at it.
// The judge reads lines two at a time and picks the funniest.
//
// The line: "Four billion years of wishes, howls, and 2 a.m. promises — and I'm still the one doing all the glowing while you blame me for the tide."
// Why it wins: it speaks as the Moon in the first person and answers all
// three things at once — the wishes, the howls, the 2 a.m. promises to
// change. It is wry and old and tired: four billion years on the job, still
// unpaid, still glowing. The comeback turns at the end — humanity blames
// the Moon for the tide, the one thing the Moon actually does, while the
// Moon does all the work. It lands in one read, explains nothing, and
// needs no setup: everyone has wished on the Moon and blamed it for
// something. (135 characters, one line, no trailing newline.)

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Four billion years of wishes, howls, and 2 a.m. promises — and I'm still the one doing all the glowing while you blame me for the tide.";

// Gate: the entry must be UTF-8 text of 1 to 240 characters, not only
// whitespace, and a single line. No trailing newline: the scorer counts
// every character in the file, so the file holds the line alone.
const MIN_LINE_CHARS = 1;
const MAX_LINE_CHARS = 240;

function validateLine(line: string): void {
  if (line.length < MIN_LINE_CHARS || line.length > MAX_LINE_CHARS) {
    throw new Error(
      `entry must be ${MIN_LINE_CHARS}-${MAX_LINE_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validateLine(LINE);

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${JSON.stringify(LINE)} to ${outPath}`);
