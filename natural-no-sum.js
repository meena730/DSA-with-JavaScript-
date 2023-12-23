// Function to calculate the sum of natural numbers
function calculateSum(n) {
    if (n <= 0 || !Number.isInteger(n)) {
        return "Please enter a positive integer.";
    }
    let sum = (n * (n + 1)) / 2;

    return sum;
}

let arr = [12 , 2 ,8 ,6,10] 

let result = calculateSum(arr);
console.log(result);
