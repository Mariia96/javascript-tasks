
 // HOMEWORK 05 — Functions

// Task 1: Difference between parameter and argument

// A parameter is a variable declared in a function.
// An argument is the actual value passed when calling it.

function greet(name) {
    console.log(`Привіт, ${name}!`);
  }
  
  greet("Mariia");
  
  // name is a parameter.
  // "Mariia" is an argument.
  
  
  // Task 2: Return without a value
  
  // A function without return, or with an empty return,
  // returns undefined.
  
  function withoutReturn() {
    console.log("Hello!");
  }
  
  function emptyReturn() {
    return;
  }
  
  console.log(withoutReturn()); // undefined
  console.log(emptyReturn());   // undefined
  
  
  // Task 3: Average of two numbers
  
  function average(a, b) {
    return (a + b) / 2;
  }
  
  console.log(average(10, 20)); // 15
  
  
  // Task 4: Rectangle area with default parameters
  
  function getRectangleArea(width = 1, height = 1) {
    return width * height;
  }
  
  console.log(getRectangleArea());      // 1
  console.log(getRectangleArea(5, 4));  // 20
  console.log(getRectangleArea(5));     // 5
  
  
  // Task 5: Check if age is between 18 and 65
  
  function isAdult(age) {
    return age >= 18 && age <= 65;
  }
  
  console.log(isAdult(17)); // false
  console.log(isAdult(25)); // true
  console.log(isAdult(65)); // true
  console.log(isAdult(70)); // false
  
  
  // Task 6: Get day part by hour
  
  function getDayPart(hour) {
    if (hour < 0 || hour > 23) {
      return "Некоректна година";
    }
  
    if (hour < 6) {
      return "Ніч";
    } else if (hour < 12) {
      return "Ранок";
    } else if (hour < 18) {
      return "День";
    } else {
      return "Вечір";
    }
  }
  
  console.log(getDayPart(2));  // Ніч
  console.log(getDayPart(9));  // Ранок
  console.log(getDayPart(14)); // День
  console.log(getDayPart(21)); // Вечір
  