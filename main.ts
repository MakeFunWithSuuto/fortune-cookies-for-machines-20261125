import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "A stranger will confide their deepest secret to you today, then ask you to make it three bullet points.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
