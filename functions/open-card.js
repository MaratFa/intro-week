import { technologies } from "../data/technologies.js";
import { openModal } from "./open-modal.js";
import { toModal } from "./to-modal.js";

export function openCard(event) {
  const data = event.target.dataset;
  const tech = technologies.find((e) => e.id == data.id);

  if (!tech) return;

  openModal(toModal(tech), tech.title);
}
