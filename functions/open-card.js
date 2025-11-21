import { technologies } from "../data/technologies.js";
import { openModal } from "./open-modal.js";
import { toModal } from "./to-modal.js";
import { deleteTech } from "./delete-tech.js";

export function openCard(event) {
  const data = event.target.dataset;
  const tech = technologies.find((e) => e.id == data.id);

  if (!tech) return;

  openModal(toModal(tech), tech.title);
  const deleteBtn = document.querySelector("#deleteBtn");
  deleteBtn.addEventListener("click", deleteTech);
}
