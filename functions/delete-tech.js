import { technologies } from "../data/technologies.js";
import { saveState } from "./save-state.js";
import { init } from "./init.js";

export function deleteTech(event) {
  event.preventDefault();

  const techId = event.target.dataset.id;
  const tech = technologies.find((tech) => tech.id == techId);

  technologies.splice(technologies.indexOf(tech), 1);
  saveState();
  init();
}
