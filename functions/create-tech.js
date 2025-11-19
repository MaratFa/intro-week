export function createTech(event) {
  event.preventDefault();

  const title = event.target.title;
  const description = event.target.description;
  console.log(title);
  console.log(description);
  
}