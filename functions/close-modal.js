import { modal } from "../constants/constants.js";
import { APP_TTTLE } from "../constants/constants.js";

export function closeModal() {
  modal.classList.remove("open");
  document.title = APP_TTTLE;
}
