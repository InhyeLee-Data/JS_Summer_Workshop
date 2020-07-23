// Array of Objects
let plants= [
    {name: "Jade", waterLevel: 1},
    {name: "Snake", waterLevel: 0.5},
    {name: "Sunflower", waterLevel: 0.6},
    {name: "Cactus", waterLevel: 0.2},
];



// Adding an event to a button
let button = document.querySelector("#addItem");
let counter =0;
let visiblePlants =[];


button.addEventListener('click', (event) =>{ //event (event iteself)
    if (plants[counter]) {
        console.log(`I've been clicked ${counter+1} time(s).`);
        visiblePlants.push(plants[counter]);
        render(visiblePlants);
        button.disabled = false;
    } 
    //increase the couter
    counter++;
    // Then see if we need to disable
    if (counter >= plants.length) {
        console.log("Now, the Button is disabled")
        button.disabled = true;
    }
    console.log(visiblePlants)
})


function render(arr) {
    let container = document.querySelector("#container");
    container.innerHTML = arr.map(
        (item) => {
        return `<li>${item.name}</li>`
    }).join(" ");
    
    container.innerHTML = `<ul>${container.innerHTML}</ul>`

}



console.log(container);