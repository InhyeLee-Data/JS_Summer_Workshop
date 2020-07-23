let fruit = ["Apple", "Orange", "Banana"];
let years = [2019, 2920, 2006];
years.sort(function(a,b) {
    return a - b // small numbers first
})
console.log(years);

newYears = years.reduce(function(a,b){
    return a*b;
})

console.log(newYears);


 

console.log("map");
// MAP 
let newPlantWLev = plantWLev.map(function(item) {
    /*item = {name, waterLevel*/
        return {
            name: item.name,
            waterLevel: item.waterLevel,
            waterPct: item.waterLevel *100 + "%"
        }

})

let dryPlants = ["Cactus"];// items we'll skip for waterL

console.log("new Plant water level is", newPlantWLev);


console.log("filter");

const lowWaterLevPlant = plantWLev.filter((item) => {
    return (item.waterLevel <= 0.5 && !dryPlants.includes(item.name))
    /*return things that pass these two condition*/ 
            
})


console.log("Plants with lower than 0.5 waterlevel that is not a dry plant", lowWaterLevPlant);


//SORT
console.log("sort");
newPlantWLev.sort((a,b) =>{
   return a.waterLevel - b.waterLevel
})

console.log(newPlantWLev);

//REDUCE
//Average waterlevel
const avgWaterLev = newPlantWLev.reduce((a,b)=> { // a & b = item in the array (Acc, Value)
    if (a.waterLevel){ 
        return a.waterLevel + b.waterLevel 
    } else {
        return a + b.waterLevel 
    }
   
})/newPlantWLev.length;

console.log(avgWaterLev);

const capItemName = (item) => {
    let obj = item;
    obj.name = item.name.toUpperCase();
    return obj;
}

console.log("ALL CAPS");
const capPlantWLev = newPlantWLev.map(capItemName);
console.log(capPlantWLev);