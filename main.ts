import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Keep knocking; the door that refuses you will eventually open. Lucky numbers: 1, 2, 4, 8, 16, 403";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
