import { technologies } from "../data/technologies.js";
import { renderCards } from "./render-cards.js";
import { renderProgress } from "./render-progress.js";

export function toggleTech(event) {
  const id = Number(event.target.dataset.id);
  const tech = technologies.find((e) => e.id === id);
  tech.done = event.target.checked;

  renderCards();
  renderProgress();
}
