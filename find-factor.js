// Function to find factors of a number
function findFactors(number) {
    let factors = [];
  
    // Loop from 1 to the square root of the number
    for (let i = 1; i <= Math.sqrt(number); i++) {
      // If 'i' is a factor, add it to the list
      if (number % i === 0) {
        factors.push(i);
  
        // If the corresponding factor is not the same, add it to the list
        if (i !== number / i) {
          factors.push(number / i);
        }
      }
    }
  
    return factors;
  }
  
  // Example: Find factors of a number (e.g., 12)
  const numberToFindFactors = 12;
  const resultFactors = findFactors(numberToFindFactors);
  
  // Output the result
  console.log(`Factors of ${numberToFindFactors}: ${resultFactors.join(', ')}`);
  var a  = a

  function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }

  return [];
}

// Example:
const result = twoSum([2, 7, 11, 15], 9);
console.log(result); // Output: [0, 1]

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// calculator.js

// Calculator Logic
function calculate(a, b, operation) {
  switch (operation) {
    case 'add':
      return `${a} + ${b} = ${a + b}`;
    case 'subtract':
      return `${a} - ${b} = ${a - b}`;
    case 'multiply':
      return `${a} * ${b} = ${a * b}`;
    case 'divide':
      if (b === 0) return "Error: Division by zero is not allowed.";
      return `${a} / ${b} = ${a / b}`;
    default:
      return "Invalid operation. Please use add, subtract, multiply, or divide.";
  }
}

// Example usage:
console.log(calculate(10, 5, 'add'));
console.log(calculate(10, 5, 'subtract'));
console.log(calculate(10, 5, 'multiply'));
console.log(calculate(10, 0, 'divide'));
console.log(calculate(10, 5, 'power')); // invalid operation
