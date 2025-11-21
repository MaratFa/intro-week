import { eventListeners } from "./event-listeners.js";
import { renderCards } from "./render-cards.js";
import { renderProgress } from "./render-progress.js";

export function init() {
  eventListeners();
  renderCards();
  renderProgress();
}
