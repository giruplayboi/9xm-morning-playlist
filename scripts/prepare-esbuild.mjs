import { chmodSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "node_modules");
const targets = [];

function walk(dir) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) walk(full);
    else if (entry === "esbuild" && full.includes(`${join("node_modules", "esbuild")}${"/"}`)) targets.push(full);
  }
}

walk(root);
for (const target of targets) {
  try { chmodSync(target, 0o755); } catch { /* Deployment filesystems may already be executable. */ }
}
