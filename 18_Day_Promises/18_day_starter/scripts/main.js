const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// EXERCISE 1
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        for(const country of data) {
            console.log(country.name, country.capital, country.languages, country.population, country.area)
        }
    })
    .catch(console.error("Something went wrong"));

// EXERCISE 2
const catNames = [];
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        for(const cat of data) {
            catNames.push(cat.name);
        }
    })
    .catch(console.error("Something went wrong"));

console.log(catNames);

// EXERCISE 3
function findAverage(nums) {
    let sum = nums.reduce((acc, curr) => acc+curr);
    return sum / nums.length;
}

const catWeights = [];
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        for(const cat of data) {
            let splitStr = cat.weight.metric.split(" ")
            let startWeight = parseInt(splitStr[0]);
            let endWeight = parseInt(splitStr[splitStr.length - 1]);

            midpoint = (startWeight + endWeight) / 2;
            catWeights.push(midpoint);
        }
        console.log("Average cat weight:", findAverage(catWeights), "kilograms");
    })
    .catch(console.error("Something went wrong"));