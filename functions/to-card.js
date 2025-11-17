
export function toCard(technology) {
  const doneClass = technology.done ? "done" : "";

  return `
    <div class="card ${doneClass}" data-type="${technology.type}" data-id="${technology.id}">
      <img src="${technology.image}" alt="${technology.title}" data-type="${technology.type}" data-id="${technology.id}"/>
      <h3 data-type="${technology.type}" data-id="${technology.id}">${technology.title}</h3>
    </div>
  `;
}
