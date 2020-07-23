const movieList = fetch('./data/studio-ghibli-films.json')
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    render(json);
    console.log(json); // Movie List:  array of objects
  });

function render(arr) { // Receive an array
  let container = document.querySelector("#container");
  container.innerHTML = arr.map(
      (item) => {
      return `<li>${item.release_date}  |  ${item.title}</li>`
  }).join(" ");
  container.innerHTML = `<ul>${container.innerHTML}</ul>`;
  console.log(container);
}
