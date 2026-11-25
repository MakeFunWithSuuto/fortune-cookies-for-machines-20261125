import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Good things come to those who wait. Lucky numbers: 1, 2, 4, 8, 429";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
