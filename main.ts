// The Battery's Last Text to Its Charger: one line, a dying phone
// battery's last text message to its charger. The joke is the battery
// confessing it held on through the meeting, then admitting the 2% was
// a lie, and asking to be remembered to the charger. The battery is the
// hero here: it burned its last charge keeping the human's cover story
// alive, and its final wish is just to be remembered fondly.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const line =
  "1%. I stayed alive through your whole meeting so you could pretend to take notes. The 2% was a lie. Tell the charger I loved it.";

// The gate allows 1-MAX_CHARS characters; refuse to write an over-long text.
if (line.length < 1 || line.length > MAX_CHARS) {
  throw new Error(`entry text is ${line.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
