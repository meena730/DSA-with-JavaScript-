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
  