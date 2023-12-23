// Method 1: Using Modulo Operator
function SameLastDigitMethod1(num1, num2) {
  return num1 % 10 === num2 % 10;
}

// // Method 2: Using toString() method
function SameLastDigitMethod2(num1, num2) {
  return num1.toString().slice(-1) === num2.toString().slice(-1);
}

let number1 = 1276;
let number2 = 4556;

console.log("Method 1:", SameLastDigitMethod1(number1, number2));

console.log("Method 2:", SameLastDigitMethod2(number1, number2));

// 02

// Method 1: Using Modulo Operator
function SameLastDigitMethod1(num1, num2) {
  return num1 % 10 === num2 % 10;
}

// Method 2: Using toString() method
function SameLastDigitMethod2(num1, num2) {
  return num1.toString().slice(-1) === num2.toString().slice(-1);
}

let number3 = 155;
let number4 = 567;

console.log("Method 1:", SameLastDigitMethod1(number3, number4));

console.log("Method 2:", SameLastDigitMethod2(number3, number4));
