import { technologies } from "../data/technologies.js";

export function computeProgressPercent() {
  if (technologies.length === 0) return 0;

  let doneCount = 0;

  for (const technology of technologies) {
    if (technology.done) doneCount++;
  }

  return Math.round((100 * doneCount) / technologies.length);
}
