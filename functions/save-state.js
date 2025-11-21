import { LS_KEY } from "../constants/constants.js";
import { technologies } from "../data/technologies.js";

export function saveState() {
  localStorage.setItem(LS_KEY, JSON.stringify(technologies));
}
