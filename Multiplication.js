// Multiplication method

for(var i= 5;i<=50; i+=5){
    console.log(i)
}
function Multiplication(number){
    console.log(`Multiplication table for ${number}`)
    for (let i =1; i<=10;i++ ){
        const result = number*i;
        console.log(`${number}*${i}= ${result}`)
    }
}
Multiplication(5)


function divideNumber(number){
    console.log(`Division of ${number}`);
    for (let i=2; i<=20; i+=2){
        let result= number%i;
     console.log(`${result}`)
    
    }
}
divideNumber(50)

function divideNumber(number){
    console.log(`Division of ${number}`);
    for (let i=2; i<=20; i+=2){
        let result= number/i;
     console.log(`${result}`)
    
    }
}
divideNumber(50)
