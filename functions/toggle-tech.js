import { technologies } from "../data/technologies.js";
import { init } from "./init.js";
import { saveState } from "./save-state.js";

export function toggleTech(event) {
  const id = Number(event.target.dataset.id);
  const tech = technologies.find((e) => e.id === id);
  tech.done = event.target.checked;
  saveState();
  init();
}
