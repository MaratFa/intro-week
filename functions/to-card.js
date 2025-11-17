
export function toCard(technology) {
  const doneClass = technology.done ? "done" : "";

  return `
    <div class="card ${doneClass}" data-type="${technology.type}" data-id="${technology.id}">
      <img src="${technology.image}" alt="${technology.name}" data-type="${technology.type}" data-id="${technology.id}"/>
      <h3 data-type="${technology.type}" data-id="${technology.id}">${technology.name}</h3>
    </div>
  `;
}
