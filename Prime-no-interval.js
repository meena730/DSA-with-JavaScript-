function printPrimeNumbers(start, end) {
    console.log(`Prime numbers between ${start} and ${end}:`);
  
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example: Print prime numbers between 10 and 50
  printPrimeNumbers(10, 50);  