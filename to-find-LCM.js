// Method 1: Using a Loop
function findLCMMethod1(num1, num2) {
    let max = Math.max(num1, num2);
    while (true) {
        if (max % num1 === 0 && max % num2 === 0) {
            return max;
        }
        max++;
    }
}

// // Method 2: Using the LCM Formula
// function findLCMMethod2(num1, num2) {
//     return (num1 * num2) / findGCD(num1, num2);
// }

// Example usage
let number1 = 12;
let number2 = 18;

// Find LCM using Method 1
console.log("Method 1 LCM:", findLCMMethod1(number1, number2));

// // Find LCM using Method 2
// console.log("Method 2 LCM:", findLCMMethod2(number1, number2));

// Helper function to find GCD (used in Method 2)
// function findGCD(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }
