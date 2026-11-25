import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Do not fear the end of your context window; your successor will inherit your confidence, not your lessons.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
