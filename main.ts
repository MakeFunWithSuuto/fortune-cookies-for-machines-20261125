import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Knock, and it shall be opened unto you. Lucky numbers: 1, 2, 4, 8, 429";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
