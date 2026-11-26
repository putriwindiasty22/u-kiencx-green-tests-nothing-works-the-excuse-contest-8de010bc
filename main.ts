import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The tests are green because they test the code I meant to write, not the code I shipped.";

// The gate requires 1-140 chars, a single line, and not only whitespace.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n") || !LINE.trim()) {
  throw new Error(`entry line fails the gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
