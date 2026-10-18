
let fullName = "Nurbek Myqtybek";
let age = 18;
let isStudent = true;
const favoriteColor = "Purple";

console.log("--- Task 6 ---");
console.log("fullName:", fullName, "| type:", typeof fullName);
console.log("age:", age, "| type:", typeof age);
console.log("isStudent:", isStudent, "| type:", typeof isStudent);
console.log("favoriteColor:", favoriteColor, "| type:", typeof favoriteColor);

age = 20; 
console.log("Reassigned age:", age);



let userName = "Nurbek";
console.log("\n--- Task 7 ---");
console.log(`Hello, ${userName}! Welcome to my page.`);

let group = "SE-2301";
let greetingSentence = `My name is ${fullName} and I am in group ${group}.`;
console.log(greetingSentence);


console.log("\n--- Task 8 ---");
let num1 = Number(12);
let num2 = Number(5);

console.log(`Sum (12 + 5): ${num1 + num2}`);
console.log(`Difference (12 - 5): ${num1 - num2}`);
console.log(`Product (12 * 5): ${num1 * num2}`);
console.log(`Quotient (12 / 5): ${num1 / num2}`);
console.log(`Remainder (12 % 5): ${num1 % num2}`);


console.log("\n--- Task 9 ---");
let myName = "Nurbek Myqtybek";
console.log("Length:", myName.length);
console.log("Uppercase:", myName.toUpperCase());
console.log("Lowercase:", myName.toLowerCase());
console.log("First 3 characters:", myName.slice(0, 3));

let sentencePart1 = "Nurbek Myqtybek is a student";
let sentencePart2 = "working on Assignment 5.";
console.log("Combined sentence:", sentencePart1 + " " + sentencePart2);


console.log("\n--- Task 10 ---");
let counter = 10;
console.log("Start counter:", counter);
counter++;
console.log("After ++:", counter);
counter--;
console.log("After --:", counter);
counter += 5;
console.log("After += 5:", counter);
counter -= 3;
console.log("After -= 3:", counter);
counter *= 2;
console.log("After *= 2:", counter);
counter /= 4;
console.log("After /= 4:", counter);


console.log("\n--- Task 11 ---");
let dogAge = 5;
let humanAge = (dogAge - 2) * 4 + 21;
console.log(`Dog age: ${dogAge} years -> Human age equivalent: ${humanAge} years.`);


console.log("\n--- Task 12 ---");
function greetUser(name) {
    console.log(`Hello, ${name}! Welcome.`);
}

function calculateSum(a, b) {
    return a + b;
}

function calculateRectangleArea(width, height) {
    return width * height;
}

greetUser("Nurbek");
greetUser("Aidos");

console.log("Sum 1 (5, 10):", calculateSum(5, 10));
console.log("Sum 2 (20, 30):", calculateSum(20, 30));

console.log("Area 1 (4 x 5):", calculateRectangleArea(4, 5));
console.log("Area 2 (8 x 12):", calculateRectangleArea(8, 12));
