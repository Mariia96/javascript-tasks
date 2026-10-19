
 // HOMEWORK 06 — Arrow Functions

// Task 1: Rewrite a regular function as an arrow function

// Regular function
function sum(a, b) {
    return a + b;
  }
  
  // Arrow function
  const sumArrow = (a, b) => a + b;
  
  console.log(sumArrow(5, 3)); // 8
  
  
  // Task 2: Arrow function without return
  
  // If an arrow function has a single expression
  // without curly braces, return is implicit.
  
  const multiply = (a, b) => a * b;
  
  console.log(multiply(4, 5)); // 20
  
  
  // Task 3: applyOperation with callback function
  
  function applyOperation(a, b, operation) {
    return operation(a, b);
  }
  
  const result = applyOperation(5, 4, (a, b) => a * b);
  
  console.log(result); // 20
  
  
  // Task 4: greet(name) using template literals
  
  const greet = (name) => `Привіт, ${name}!`;
  
  console.log(greet("Марія")); // Привіт, Марія!
  