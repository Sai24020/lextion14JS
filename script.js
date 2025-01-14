let name = [`Suzan`];
name.push('Salma');
console.log(name);// ['suzan', 'salma']
name.push('laila');
console.log(name);// ['suzan', 'salma', 'laila']
name.push('linda');
console.log(name);// ['suzan', 'salma', 'laila', 'linda']

let names = ['David', 'Christoffer', 'Johan', 'Maja'];
console.log(names); // ['David', 'Christoffer', 'Johan', 'Maja']
// Ta bort "Christoffer" och "Johan"
names.splice(1, 2);
console.log(names); // ['David', 'Maja']

let fruits = ['kiwi', 'apple', 'pear'];
console.log(fruits); // ['kiwi', 'apple', 'pear']

// 1. Lägg till en frukt i slutet av arrayen
let fruits1 = ['kiwi', 'apple', 'pear'];
fruits1.push('banana');
console.log(fruits1); // ['kiwi', 'apple', 'pear', 'banana']

// 2. Lägg till en frukt i början av arrayen
let fruits2 = ['kiwi', 'apple', 'pear'];
fruits2.unshift('orange');
console.log(fruits2); // ['orange', 'kiwi', 'apple', 'pear']

// 3. Ta bort sista frukten i arrayen
let fruits3 = ['kiwi', 'apple', 'pear'];
fruits3.pop();
console.log(fruits3); // ['kiwi', 'apple']

// 4. Ta bort första frukten i arrayen
let fruits4 = ['kiwi', 'apple', 'pear'];
fruits4.shift();
console.log(fruits4); // ['apple', 'pear']

// 5. Sätt in en frukt på index 1
let fruits5 = ['kiwi', 'apple', 'pear'];
fruits5.splice(1, 0, 'grape');
console.log(fruits5); // ['kiwi', 'grape', 'apple', 'pear']

// 6. Sätt in tre frukter på index 2
let fruits6 = ['kiwi', 'apple', 'pear'];
fruits6.splice(2, 0, 'mango', 'peach', 'plum');
console.log(fruits6); // ['kiwi', 'apple', 'mango', 'peach', 'plum', 'pear']

console.log("Hello world!")
console.log(1 + 2)
console.log(2 - 1)
console.log(1 * 2)
console.log(3 / 2)
console.log(4 / 2)
console.log(7 % 2)
console.log(3 ** 2)

const fruit = {
    name: "Apple",
    isNutririous: true,
    color: "Green"

}
console.log(fruit.name);
//showMessage.fruit(name);

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


