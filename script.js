let namesList = [`Suzan`];
namesList.push('Salma');
console.log(namesList);// ['suzan', 'salma']
namesList.push('laila');
console.log(namesList);// ['suzan', 'salma', 'laila']
namesList.push('linda');
console.log(namesList);// ['suzan', 'salma', 'laila', 'linda']

function addName() {
    const nameInput = document.getElementById(`name`).value;

    if (nameInput.trim() !== ``) {
        namesList.push(nameInput.trim());
        document.getElementById("demo2").innerHTML = namesList.join(`, `);
        document.getElementById("name").value = ``;    
    }  else {
        alert(`Hoppsan.....Vänligen ange ett giltigt namn!`);
    }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//   The Basics
//-----------------------------------------------------

const { log } = require("console");

//1. Gör en array som innehåller 5 st olika frukter av datatypen string.
const fruitS = ["Apple", "Banana", "Grape", "Orange", "Mango"];
console.log(fruitS);
// 2. gör en array som innehåller 3 olika datatyper, ex. string, number, array.
const mixedArray = ["Banana", "Green", 12, [1, 3, "Yellow"]];
console.log(mixedArray);

//-----------------------------------------------------
let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
console.log(animals); // 'cat', 'hamster', 'parrot', 'funky chihuahua'

// 3. Hur många objekt arrayen ovan innehåller.
console.log(animals.length); // 4

// 4. I arrayen ovan, hämta cat.
console.log(animals[0]); // 'cat'

// 5. I arrayen ovan, hämta funky chihuahua.
console.log(animals[3]); // 'funky chihuahua'

// 6. I arrayen ovan, byt ut hamster mot tiger.
animals[1] = 'tiger';
console.log(animals); // ['cat', 'tiger', 'parrot', 'funky chihuahua']

//-----------------------------------------------------
let x = [1,2,3];
let y = [4,5,6];
// 7. Lägg ihop ovanstående arrayer. det finns olika som (let mergedArray = [...x, ...y];) eller (let mergedArray = x.concat(y);)
x.push.apply(x, y);
console.log(x); // [1, 2, 3, 4, 5, 6]

//-----------------------------------------------------
let a = [1,2,3,7,8,9];
let b = [4,5,6];
// 8. Merga ner array b på index 3 array a.
a.splice(3, 0, ...b);
console.log(a); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//-----------------------------------------------------
let arr = ['a', 'b', 'c'];
// 9. Klona ovanstående array. det finns olika  (slice(): let clonedArr = arr.slice();) eller (spread operator: let clonedArr = [...arr];) eller (concat(): let clonedArr = [].concat(arr);)
let clonedArr = Array.from(arr);
console.log(clonedArr); // ['a', 'b', 'c']

//---------------------------------------------------------------------
//Methods som .push(), .unshift(), .pop(), .shift(), .splice(), .includes(), .indexOf(), .substring()
let fruits = ['kiwi', 'apple', 'pear'];
console.log(fruits); // ['kiwi', 'apple', 'pear']

// 10. Lägg till en frukt i slutet av arrayen
let fruits1 = ['kiwi', 'apple', 'pear'];
fruits1.push('banana');
console.log(fruits1); // ['kiwi', 'apple', 'pear', 'banana']

// 11. Lägg till en frukt i början av arrayen
let fruits2 = ['kiwi', 'apple', 'pear'];
fruits2.unshift('orange');
console.log(fruits2); // ['orange', 'kiwi', 'apple', 'pear']

// 12. Ta bort sista frukten i arrayen
let fruits3 = ['kiwi', 'apple', 'pear'];
fruits3.pop();
console.log(fruits3); // ['kiwi', 'apple']

// 13. Ta bort första frukten i arrayen
let fruits4 = ['kiwi', 'apple', 'pear'];
fruits4.shift();
console.log(fruits4); // ['apple', 'pear']

// 14. Sätt in en frukt på index 1
let fruits5 = ['kiwi', 'apple', 'pear'];
fruits5.splice(1, 0, 'grape');
console.log(fruits5); // ['kiwi', 'grape', 'apple', 'pear']

// 15. Sätt in tre frukter på index 2
let fruits6 = ['kiwi', 'apple', 'pear'];
fruits6.splice(2, 0, 'mango', 'peach', 'plum');
console.log(fruits6); // ['kiwi', 'apple', 'mango', 'peach', 'plum', 'pear']

//-----------------------------------------------
let names = ['David', 'Christoffer', 'Johan', 'Maja'];
// 16. I arrayen ovan, ta bort Christoffer och Johan.
console.log(names); // ['David', 'Christoffer', 'Johan', 'Maja']
// Ta bort "Christoffer" och "Johan"
names.splice(1, 2);
console.log(names); // ['David', 'Maja']

//-----------------------------------------------
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 17. Spegelvänd på arrayen ovan.
nums.reverse();
console.log(nums);
//-----------------------------------------------

let str = 'Supercalifragilisticexpialidocious';

// 18. Kika om strängen ovan innehåller bokstaven 'n'
let containsN = str.includes('n');
console.log(containsN); // false

// 19. Kika om strängen ovan innehåller bokstaven 'x'
let containsX = str.includes('x');
console.log(containsX); // true

// 20. I ovanstående array, Hitta positionen för första förekomsten av 'p'
let indexOfP = str.indexOf('p');
console.log(indexOfP); // 4

// 21. I strängen ovan, Plocka fram de 5 första tecknena
let firstFiveChars = str.substring(0, 5);
console.log(firstFiveChars); // 'Super'

// 22. I strängen ovan, Plocka fram de 7 sista tecknena
let lastSevenChars = str.substring(str.length - 7);
console.log(lastSevenChars); // 'cious'
//-----------------------------------------------

//  Advanced methods ( high order methods ) <<<<.filter()>>>>
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
// 23. I arrayen ovan, filtera fram alla nummer över 5.
let numOverFive = numArray.filter(number => number > 5);
console,log(numOverFive);// [23, 45, 62, 21, 54]

// 24. I arrayen ovan, filtera fram alla nummer under 5.
let numUnderFive = numArray.filter(number => number < 5);
console,log(numUnderFive);// [1, 3]
//-----------------------------------------------
let persons = [
    {
        name: "Felicia",
        age: 12
    },
    {
        name: "Pelle",
        age: 20
    },
    {
        name: "Peter",
        age: 59
    },
    {
        name: "Anna",
        age: 32
    },
    {
        name: "Jocke",
        age: 18
    },
    {
        name: "Ella",
        age: 3
    }
]

// 25. Skriv ut alla namn som är 18 år eller över från arrayen ovan.

// 26. Skriv ut alla namn som är under 18 år från arrayen ovan.

//-----------------------------------------------
// använda .sort()
let arr1 = ['beta', 'alfa', 'gamma'];
// 27. Sortera ovanstående array alfabetisk.

//-----------------------------------------------
let nums1 = [1,5,7,9,3,4,2,6,8];
// 28. Sortera ovanstående array numeriskt.

// 29. I person-arrayen ovan, sortera objekten efter ålder, yngst först.

// 30. I person-arrayen ovan, sortera objekten efter ålder, äldst först.

// 31. I person-arrayen ovan, sortera objekten i bokstavsordning efter deras namn

//-----------------------------------------------
// använda .map()
// 32. I person-arrayen ovan, gör om alla namn till versaler.

// 33. I person-arrayen ovan, spegelvänd alla namn.

//-----------------------------------------------
// Loop arrays
let fruitsLoop = ['apelsin', 'päron', 'äpple', 'kiwi'];
// 34. Loopa ut följande array med en forEach()-loop. console.log() varje ord.

// 35. Loopa ut följande array med en for of-loop. console.log() varje ord.

// 36. Loopa ut följande array med en for-loop. console.log() varje ord.

/* 37. Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex:
0 - apelsin
1 - päron
...*/


//-----------------------------------------------
const fruit = {
    name: "Apple",
    isNutririous: true,
    color: "Green"

}
console.log(fruit.name);

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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const months = ["Jan", "Feb", "Mar", "Nov", "Dec"];
console.log(months);
const sorted1 = months.splice(3, 0, 'Apr', 'Maj', 'Jun', "Jul", "Aug", "Sep", "Oct");
 console.log(months);
 //const reversed = months.toReversed();
 const reversed = months.toReversed();
 console.log(reversed);
 //document.getElementById("demo").innerHTML = months;
 //document.getElementById("demo1").innerHTML = reversed;

console.log("Hello world!")
console.log(1 + 2)
console.log(2 - 1)
console.log(1 * 2)
console.log(3 / 2)
console.log(4 / 2)
console.log(7 % 2)
console.log(3 ** 2)


