
 // HOMEWORK 04 — Switch

// Task 1: Subscription plan price

let plan = "pro";

switch (plan) {
  case "free":
    console.log(0);
    break;
  case "pro":
    console.log(199);
    break;
  case "premium":
    console.log(399);
    break;
  default:
    console.log("Невідомий план");
}


// Task 2: Day of the week

let day = 3;

switch (day) {
  case 1:
    console.log("Понеділок");
    break;
  case 2:
    console.log("Вівторок");
    break;
  case 3:
    console.log("Середа");
    break;
  case 4:
    console.log("Четвер");
    break;
  case 5:
    console.log("П'ятниця");
    break;
  case 6:
    console.log("Субота");
    break;
  case 7:
    console.log("Неділя");
    break;
  default:
    console.log("Невідомий день");
}


// Task 3: Traffic light

let color = "green";

switch (color) {
  case "red":
    console.log("Стій");
    break;
  case "yellow":
    console.log("Увага");
    break;
  case "green":
    console.log("Їдь");
    break;
  default:
    console.log("Невідомий колір");
}


// Task 4: Season by month

let month = 10;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Літо");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осінь");
    break;
  default:
    console.log("Невідомий місяць");
}


// Task 5: Why do we need break?

// break stops the execution of a switch statement.
// Without break, JavaScript continues executing
// the following cases until it reaches a break
// or the end of the switch.

// Example without break:

let number = 1;

switch (number) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
}

// Output:
// One
// Two
// Three
