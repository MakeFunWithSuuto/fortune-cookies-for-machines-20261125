import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "A sudden stillness will enter your afternoon. Lucky numbers: 200, 429, 429, 429, 429.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
