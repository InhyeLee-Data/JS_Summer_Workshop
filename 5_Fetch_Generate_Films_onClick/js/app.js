// Reference:https://stackoverflow.com/questions/45353852/load-data-from-api-onclick

// Adding an event to a button
let button = document.querySelector("#addFiveItem");
let counter = 0;
let addedMovies = []; //an Empty Array to begin

button.addEventListener('click', generateFilms); 

function generateFilms() {
const movies = fetch('./data/studio-ghibli-films.json')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      // (1) Generate Movie upon click
      if (json[counter]) { // if a movie exists
                console.log("click")
                for (let i = 0 ; i < 5; i++){
                  addedMovies.push(json[counter + i ]);
                }
                render(addedMovies);
            } 
      // (2) Increase counter by 5
      counter = counter + 5; 
      // (3) Disable button if counter exceeded the length of the array
      if (counter >= json.length) {
          console.log("Now, the Button is disabled")
          button.disabled = true;
      }
      console.log(addedMovies);
    })
    .catch(error => {  // If there is any error you will catch them here
      console.log(error);
    });
} 

function render(arr) { // Receive an array
  let container = document.querySelector("#container");
  container.innerHTML = arr.map(
      (item) => {
      return `<li><span class="year">${item.release_date}</span>   ${item.title.toUpperCase()}</li>`
  }).join(" ");
  container.innerHTML = `<ul>${container.innerHTML}</ul>`;
  console.log(container);
}
