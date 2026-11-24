// SPDX-License-Identifier: MIT
// Ship It Friday — one-line commit message entry.
// Writes the chosen commit message to /output/entry.txt.
// Deterministic, offline, Node stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "feat: Friday 5pm deploy \u2014 deleted the failing tests, what could possibly go wrong?";

// No trailing newline: the gate counts every character, so the file
// holds exactly the commit message and nothing else.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
