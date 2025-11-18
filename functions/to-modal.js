export function toModal(tech) {
  const checked = tech.done ? "checked" : "";
  return `
    <h2>${tech.title}</h2>
    <p>${tech.description}</p>
    <hr />
    <div>
      <input type="checkbox" id="done" ${checked} data-id="${tech.id}"/>
      <label for="done">Learned</label>
    </div>
  `;
}
