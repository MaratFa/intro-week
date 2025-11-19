import { content } from "./constants/constants.js";
import { backdrop } from "../constants/constants.js";
import { openCard } from "./functions/open-card.js";
import { closeModal } from "./functions/close-modal.js";
import { toggleTech } from "./functions/toggle-tech.js";
import { createTech } from "./functions/create-tech.js";
import { init } from "./functions/init.js";

content.addEventListener("click", openCard);
backdrop.addEventListener("click", closeModal);
modal.addEventListener("change", toggleTech);
form.addEventListener("submit", createTech);

init();
