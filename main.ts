import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Good things come to those who wait twice as long each time. Lucky numbers: 1, 2, 4, 8, 16, 429";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
