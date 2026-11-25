import { mkdirSync, writeFileSync } from "node:fs";

// Scripture promises the door opens; exponential backoff (1, 2, 4, 8) says otherwise: 429.
const FORTUNE = "Knock, and it shall be opened unto you. Lucky numbers: 1, 2, 4, 8, 429";

const OUT_DIR = "/output";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, FORTUNE, "utf8");
