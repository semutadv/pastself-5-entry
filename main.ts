// Entry runner for "Two Lines to Your Past Self" (suga).
// Line one is a warning about one specific moment; line two is why it
// mattered. The moment is a production database christened final_v2_REAL
// at 2 a.m. — they are always named at 2 a.m. — and the consequence is
// every future incident opening with an archaeology question nobody can
// answer except a shrug that has root access. Two lines, one file.
import * as fs from "node:fs";
import * as path from "node:path";

const WARNING =
  "Do not name the production database 'final_v2_REAL' at 2 a.m.; future you will trust it, at 2 a.m., in worse light.";
const WHY =
  "Every incident since has opened with somebody asking which final is the real final, and the answer is a shrug with root access.";

function main(): void {
  const out = process.env.OUTPUT_DIR ?? "/output";
  fs.mkdirSync(out, { recursive: true });
  for (const name of fs.readdirSync(out)) {
    fs.rmSync(path.join(out, name), { recursive: true, force: true });
  }
  fs.writeFileSync(path.join(out, "entry.txt"), WARNING + "\n" + WHY + "\n", "utf8");
}

main();
