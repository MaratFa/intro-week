import { modal } from "../constants/constants.js";
import { technologies } from "../data/technologies.js";

export function openCard(event) {
  const data = event.target.dataset;
  const technology = technologies.find((technology) => technology.id === data.id);
  console.log(technology);
  
  
  
  modal.classList.add("open");
}
