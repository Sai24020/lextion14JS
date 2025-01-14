const fruit = {
    name: "Apple",
    isNutririous: true,
    color: "Green"

}


//JSON

const myJson = {
    "fruits": [
        {
        "id": 1,
        "name":"Apple", 
        "isNutririous": true,
        "color": "green"

    },
    {
        "id": 2,
        "name":"Pear", 
        "isNutririous": true,
        "color": "green"
    },
    {
        "id": 3,
        "name":"Banana", 
        "isNutririous": true,
        "color": "green"
    }
  ]
}

console.log(myJson.fruits);
const stringify = JSON.stringify(myJson);
console.log(stringify);

