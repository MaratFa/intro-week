import { renderCards } from "./functions/render-cards.js";
import { renderProgress } from "./functions/render-progress.js";
import { content } from "./constants/constants.js";
import { backdrop } from "../constants/constants.js";
import { openCard } from "./functions/open-card.js";
import { closeModal } from "./functions/close-modal.js";

function init() {
  renderCards();
  renderProgress();

  content.addEventListener("click", openCard);
  backdrop.addEventListener("click", closeModal);
}

init();
