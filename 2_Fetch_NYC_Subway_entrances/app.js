const subwayData = fetch('data/nyc-subway-entrances.json')
                    .then((response) => { // response = returned value from fetch
                        return response.json(); // return the val
                    })
                    .then((json) => {
                        // use the json file to render our HTML
                        render(json.data); //access key by dot notation
                        console.log(json.data);
                    }) 
console.log("subwayData is", typeof subwayData);
//console.log(typeof subwayData); 

function render(arr) {
    let container = document.querySelector("#container");
    container.innerHTML = arr
    .filter((item) => {
        return item[10] // if item exists, return item at index 10
    })
    .map(
        (item) => {
        let lines= item[12].split('-').map(
            (i) => {
                // style is defined in css as train-i
                return `<span class='train-${i.toLowerCase()}'>${i}</span>`
            }
        ).join(""); // join here gets rid of comma
        return `<li><h2>${lines}<span> ${item[10]}</span></h2></li>`
    }).join(" ");
    container.innerHTML = `<ul>${container.innerHTML}</ul>`
}
