
 // HOMEWORK 01 — Operators and Conditions

// Task 1: Difference between == and ===
// == compares values with type conversion
// === compares both value and data type

console.log(5 == "5");  // true
console.log(5 === "5"); // false


// Task 2: Even or odd number

let number = 8;

console.log(number % 2 === 0);


// Task 3: Compare two numbers

let a = 15;
let b = 10;

if (a > b) {
  console.log(a);
} else if (b > a) {
  console.log(b);
} else {
  console.log("Numbers are equal");
}


// Task 4: Email and password validation

let email = "test@gmail.com";
let password = "123456";

if (email !== "" && password !== "") {
  console.log("Дані введені");
} else {
  console.log("Заповніть усі поля");
}


// Task 5: Day part (if/else)

let hour = 14;

if (hour >= 0 && hour < 6) {
  console.log("Ніч");
} else if (hour < 12) {
  console.log("Ранок");
} else if (hour < 18) {
  console.log("День");
} else if (hour <= 23) {
  console.log("Вечір");
} else {
  console.log("Некоректна година");
}


// Task 6: FizzBuzz

let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("fizzbuzz");
} else if (num % 3 === 0) {
  console.log("fizz");
} else if (num % 5 === 0) {
  console.log("buzz");
} else {
  console.log(num);
}


// Task 7: Arithmetic operations

let x = 17;
let y = 5;

console.log("Sum:", x + y);
console.log("Difference:", x - y);
console.log("Product:", x * y);
console.log("Remainder:", x % y);
