import { technologies } from "../data/technologies.js";
import { openModal } from "./open-modal.js";

export function openCard(event) {
  const data = event.target.dataset;
  const tech = technologies.find((e) => e.id == data.id);

  if (!tech) return;

  openModal("<h1>TEST</h1>", tech.title);
}
