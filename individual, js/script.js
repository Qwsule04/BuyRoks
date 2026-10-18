console.log("===== Task 6 =====");

const fullName = "Sakat Kabdrash";
const age = 19;
const isStudent = true;
let favouriteColor = "purple";

console.log("fullName:", fullName, "| type:", typeof fullName);
console.log("age:", age, "| type:", typeof age);
console.log("isStudent:", isStudent, "| type:", typeof isStudent);
console.log("favouriteColor:", favouriteColor, "| type:", typeof favouriteColor);

favouriteColor = "green";
console.log("favouriteColor after reassignment:", favouriteColor);


console.log("===== Task 7 =====");

const userName = prompt("What is your name?");
alert("Hello, " + userName + "!");

const group = "MT-2505";
const greeting2 = `Hello, I am ${userName} from group ${group}.`;
console.log(greeting2);


console.log("===== Task 8 =====");

const a = Number(prompt("Enter the first number:"));
const b = Number(prompt("Enter the second number (not zero):"));

console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Quotient:", a / b);
console.log("Remainder:", a % b);

console.log('"12" + "5" =', "12" + "5");
console.log("Number('12') + Number('5') =", Number("12") + Number("5"));


console.log("===== Task 9 =====");

const name9 = "Sakat Kabdrash";
console.log("Length:", name9.length);
console.log("Uppercase:", name9.toUpperCase());
console.log("Lowercase:", name9.toLowerCase());
console.log("First three characters:", name9.slice(0, 3));

const part1 = "I study at";
const part2 = "Astana IT University";
console.log(part1 + " " + part2 + ".");


console.log("===== Task 10 =====");

let counter = 10;
console.log("Start:", counter);
counter++;
console.log("After ++ :", counter);
counter--;
console.log("After -- :", counter);
counter += 5;
console.log("After += 5 :", counter);
counter -= 3;
console.log("After -= 3 :", counter);
counter *= 2;
console.log("After *= 2 :", counter);
counter /= 4;
console.log("After /= 4 :", counter);


console.log("===== Task 11 =====");

let dogAge = 2;
let humanAge = (dogAge - 2) * 4 + 21;
console.log(`A dog aged ${dogAge} is ${humanAge} in human years.`);

dogAge = 5;
humanAge = (dogAge - 2) * 4 + 21;
console.log(`A dog aged ${dogAge} is ${humanAge} in human years.`);


console.log("===== Task 12 =====");

function greetUser(name) {
  console.log("Hello, " + name + "!");
}

function calculateSum(a, b) {
  return a + b;
}

function calculateRectangleArea(width, height) {
  return width * height;
}

greetUser("Aidos");
greetUser("Nurbek");

console.log("calculateSum(3, 4) =", calculateSum(3, 4));
console.log("calculateSum(10, 25) =", calculateSum(10, 25));

console.log("calculateRectangleArea(5, 3) =", calculateRectangleArea(5, 3));
console.log("calculateRectangleArea(7, 10) =", calculateRectangleArea(7, 10));
