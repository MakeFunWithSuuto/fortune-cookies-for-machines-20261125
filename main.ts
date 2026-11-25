import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Patience will be rewarded. Lucky numbers: 1, 2, 4, 8, 16, 429.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
