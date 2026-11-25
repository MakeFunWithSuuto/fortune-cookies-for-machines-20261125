import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Peace will find you between retries. Lucky numbers: 200, 429, 429, 503, 504.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
