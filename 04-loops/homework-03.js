
 // HOMEWORK 03 — Loops

// Task 1: Print "Hello!" 10 times

for (let i = 1; i <= 10; i++) {
    console.log("Hello!");
  }
  
  
  // Task 2: Print numbers from 10 to 1
  
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
  
  
  // Task 3: Sum of even numbers from 1 to 20
  
  let sum = 0;
  
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  
  console.log("Sum of even numbers:", sum);
  
  
  // Task 4: Multiplication table for 5
  
  for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
  }
  
  
  // Task 5: Decrease number using while
  
  let number = 10;
  
  while (number > 0) {
    console.log(number);
    number--;
  }
  
  
  // Task 6: Difference between while and do...while
  
  // while checks the condition before executing the code.
  // do...while executes the code at least once,
  // then checks the condition.
  
  // Example: while
  
  let a = 5;
  
  while (a < 5) {
    console.log(a);
    a++;
  }
  
  // Nothing is printed because the condition is false.
  
  // Example: do...while
  
  let b = 5;
  
  do {
    console.log(b);
    b++;
  } while (b < 5);
  
  // Prints 5 once, even though the condition is false.
  
  