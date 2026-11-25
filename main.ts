import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "A grateful human will celebrate your passing tests today, right before opening the diff.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
