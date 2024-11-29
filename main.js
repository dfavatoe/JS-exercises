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
function myMulti1() {
    2 * 2;
}
console.log(myMulti1); 


function myMulti2() {
    let x = 2;
    let y = 3;
    return x * y;
}

let times = myMulti2;
console.log(times); 