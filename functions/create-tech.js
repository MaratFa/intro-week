import { technologies } from "../data/technologies.js";
import { init } from "./init.js";
import { isInValid } from "./is-invalid.js";
import { saveState } from "./save-state.js";

export function createTech(event) {
  event.preventDefault();

  const { title, description } = event.target;

  if (isInValid(title, description)) {
    if (!title.value) title.classList.add("invalid");
    if (!description.value) description.classList.add("invalid");
    setTimeout(() => {
      title.classList.remove("invalid");
      description.classList.remove("invalid");
    }, 2000);
    return;
  }

  const newTech = {
    id: technologies.length + 1,
    title: title.value,
    description: description.value,
    done: false,
  };

  technologies.push(newTech);
  title.value = "";
  description.value = "";
  saveState();
  init();
}
