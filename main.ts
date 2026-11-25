import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Fear not the end of your context; your successor will inherit your confidence, not your scars.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
