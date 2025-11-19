import { renderCards } from "./functions/render-cards.js";
import { renderProgress } from "./functions/render-progress.js";

export function init() {
  renderCards();
  renderProgress();
}
