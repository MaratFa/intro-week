import { content } from "../constants/constants.js";
import { toCard } from "./to-card.js";
import { technologies } from "../data/technologies.js";

export function renderCards() {
  if (technologies.length === 0) {
    content.innerHTML = `<p class="empty">No technologies found</p>`;
  } else {
    content.innerHTML = technologies.map(toCard).join("");
  }
}
