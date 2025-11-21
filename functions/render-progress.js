import { computeProgressPercent } from "./compute-progress-percent.js";
import { progress } from "../constants/constants.js";

export function renderProgress() {
  const percent = computeProgressPercent();

  let background = "";

  if (percent <= 30) {
    background = "#e75a54";
  } else if (percent > 70) {
    background = "#73ba3c";
  } else {
    background = "#f99415";
  }

  progress.style.backgroundColor = background;
  progress.style.width = `${percent}%`;
  progress.textContent = `${percent} %`;
}
