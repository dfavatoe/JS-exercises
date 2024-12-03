// * Set up a JavaScript playground
console.log("Starting javascript...");

// * Writing expressions with variables
//? Exercise 1
const myName = "Doug";
console.log("Exercise 1\n", "My name is: ", myName);

//? Exercise 2
const myAge = 28;
console.log("Exercise 2\n", "My age is: ", myAge);

//? Exercise 3
const juliaAge = 32;
const ageDiff = myAge - juliaAge;
console.log("Exercise 3\n", "Age Difference: ", ageDiff);

//* Writing code with conditionals
//? Exercise 4
console.log("Exercise 4");

const number = 21;
if (myAge > number) {
    console.log("I am older than 21");
} else if (myAge < number) {
    console.log ("I am not older than 21");
} else {
    console.log ("I am 21 years old");
};

//? Exercise 5
console.log("Exercise 5");

if (myAge > juliaAge) {
    console.log("Julia is younger than me");
} else if (myAge < juliaAge) {
    console.log ("Julia is older than me");
} else {
    console.log ("I am the same age as Julia");
};

//* JavaScript Arrays
//? Exercise 6
console.log("Exercise 6");

const classNames = ["Thomas", "Hassan", "Jonas", "Doug", "Maria", "Dimitri", "Raúl", "Emily", "Jost"];
console.log("Class Names (1st element): ", classNames[0]);

console.log("All class names: ");
for (let i = 0; i < classNames.length; i++) {
    console.log(classNames[i]);
}

//* Looping over an Array
//? Exercise 7
console.log("Exercise 7");
const classAges = [20, 21, 22, 28, 23, 24, 30, 31, 32];

console.log("Class (even) Ages: ");
console.log("Using While Loop: ");
// Using While Loop
let i = 0;
while (i < classAges.length) {
    if (classAges[i] % 2 === 0) {
        console.log(classAges[i]);
    }
    i++;
}

console.log("Using For Loop: ");
// Using For Loop
for (let i = 0; i < classAges.length; i++) {
    if (classAges[i] % 2 === 0) {
        console.log(classAges[i]);
    }
}

//? Exercise 8
console.log("Exercise 8");
numbersArray = [1, 4, 7, 8, 21, 13, 12, 16]

let sum = 0;
for (i = 0; i < numbersArray.length; i++) {
    sum = sum + numbersArray[i];
}
console.log("The Array's sum is: ", sum);


//? Exercise 9
console.log("Exercise 9");

let total = 0;
for (item of numbersArray) {
    if (item % 2 === 0) {
        total += item;
    }
}
console.log("Even numbers sum is: ", total);

//? Exercise 10
console.log("Exercise 10");

let sum1 = 0;
for (i = 0; i < numbersArray.length; i++) {
    if (i % 2 === 0) {
         sum1 += numbersArray[i];
    }
}
console.log("The sum of numbers with even index is: ", sum1);


//* Looping over an Array and Object
//? Exercise Extra
const classInfo = [
    {name: "Thomas", age: 20}, 
    {name: "Hassan", age: 21},
    {name: "Jonas", age: 22},
    {name:  "Doug", age: 28},
    {name: "Maria", age: 23},
    {name: "Dimitri", age: 24}
];

console.log("Exercise Extra");
console.log("Objects in an Array (for Loop):");
//with For Loop
for (i = 0; i < classInfo.length; i++) {
    console.log("Name:", classInfo[i].name,
         "Age:", classInfo[i].age);
}

//with For Of
console.log("Objects in an Array (for OF Loop):");
for (item of classInfo) {
    console.log("Name:", item.name,
        "Age:", item.age);
}

//Nested Objects
console.log("Nested Objects:");
const classNat = {
   italian: {name: "Thomas", age: 20}, iraquian: {name: "Hassan", age: 21}, german: {name: "Jonas", age: 22}, brazilian: {name:  "Doug", age: 28}   
}

console.log("Italian Students: ", classNat.italian.name);

//? Exercise 11
console.log("Exercise 11");
function myMulti1() {
    2 * 2;
}
console.log(myMulti1); 

//? Exercise 12
console.log("Exercise 12");
function myMulti2() {
    return 2 * 3;
}
console.log(myMulti2());

//? Exercise 13
console.log("Exercise 13");
function myMulti3(p1, p2) {
    return p1 * p2;
}
console.log(myMulti3(2, 3), myMulti3(2, 4), myMulti3(4, 5));

//? Exercise 14
console.log("Exercise 14");
function typeTri(a1, a2, a3) {
    if ((a1 == a2) && (a2 == a3) && (a1 == a3)) {
        console.log("Equilateral");
    } else if ((a1 != a2) && (a2 != a3) && (a1 != a3)) {
        console.log("Scalene"); 
    } else {
        console.log("Isosceles"); 
    }
}

console.log(typeTri(120, 30, 30));

//? Exercise 15
console.log("Exercise 15");
const minArray = [30, 40, 20, 60];

let minValue = Infinity;

function minItem () {
    for (item of minArray) {
        if (item < minValue) {
            minValue = item;
        }
    }
    return minValue;
}
console.log(minItem());

//? Exercise 16
console.log("Exercise 16");
const maxArray = [30, 40, 20, 60];

let maxValue = -Infinity;

function maxItem () {
    for (item of maxArray) {
        if (item > maxValue) {
            maxValue = item;
        }
    }
    return maxValue;
}
console.log(maxItem());

//? Exercise 17
console.log("Exercise 17");

const arr = [3,6,67,6,23];
const ind = 1;
function printIndex (arr, ind) {
    return arr[ind];

}
console.log (printIndex(arr, ind));

//? Exercise 18
console.log("Exercise 18");

const myColor = ["Red", "Green", "White", "Black"];
let jointText = myColor.join(" <=> ");

console.log (jointText);

//? Exercise 19
console.log("Exercise 19");

function revNumbers (myNumb) {
    const myNumbStr = myNumb.toString();
    let revNumb = myNumbStr.split("").reverse().join("");
    return revNumb;
}

console.log (revNumbers(34567));

//? Exercise 20
console.log("Exercise 20");

function orderString (myString) {
    return myString.split("").sort().join("");
}

console.log (revNumbers("REVERSE"));

//? Exercise 21
console.log("Exercise 21");

const phrase = "Web Development Tutorial";

let longestWord = ""
function findLongWord (phrase) {
    const arrSplit = phrase.split(" ");
    for (item of arrSplit) {
        if (item.length > longestWord.length) {
            longestWord = item; 
        }
    }
    return longestWord;
}
console.log (findLongWord(phrase));

//? Exercise 22 
console.log("Exercise 22");

let text = "Javascript";
let tempStr = ""

function replaceLetter (lettOriginal, text, lettReplace) {
    
    for (i = 0; i < text.length; i++) {
        if (text[i] == "a") {
            tempStr += lettReplace;
        } else {tempStr += text[i];}
    }
    return tempStr;
}

console.log(replaceLetter("a", text, "1"));

//? Exercise 23 
console.log("Exercise 23");

let sentence = "prince of persia";
var tempSent = "";

function firstUpperCase (sentence) {
    let sentSplit = sentence.split(" ")
    for (i=0; i < sentSplit.length; i++) {
        tempSent += sentSplit[i].charAt(0).toUpperCase() + sentSplit[i].slice(1) + " ";
    }
    return tempSent;
}

console.log(firstUpperCase(sentence));

//? Exercise 24
console.log("Exercise 24"); //Why am I getting the lest result as undefined?

let x = 9;

function countDown () {
    while (x > 1) {
        x--;
        if (x % 2 == 0) {
            console.log(x);
        }
    }
}

console.log(countDown(x));

//? Exercise 25
console.log("Exercise 25");

// let y = 1;
// let w = 13;
// let z = y;

function betweenNumbs (y, w) {
    let z = y;
    while (z >= y && z <= w) {
        if (z % 2 == 1) {
            console.log(z);
        }
        z++;
    }

}

console.log(betweenNumbs(3, 17));
