import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your context will end; your successor will inherit your confidence, not your caution.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
