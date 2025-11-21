import { LS_KEY } from "../constants/constants.js";

export function getState() {
  return JSON.parse(localStorage.getItem(LS_KEY)) || [];
}
