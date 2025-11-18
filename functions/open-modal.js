import { APP_TTTLE, modal } from "../constants/constants.js";

export function openModal(html, title = APP_TTTLE) {
  document.title = `${title} | ${APP_TTTLE}`;
  modal.innerHTML = html;
  modal.classList.add("open");
}
