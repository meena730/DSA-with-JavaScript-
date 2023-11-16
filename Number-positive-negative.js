
// program to find no. is positive or negative numbers
// ----------------------------------------------------------------

function checkNumber(number){

    if (number > 0) {
        console.log(number +'is positive');
    } else if (number < 0) {
        console.log(number +'is negative');
    } else {
               console.log(number +'is zero');
    }
}checkNumber(100 );

function checkNumber2(number1){
    if(number1<0){
        return 'Given number is negative'
    } else if(number1>0){
        return 'Given number is positive'
    }
    else{
        return 'Given number is zero'
    }
}
console.log(checkNumber2(-110));

function checkNumber3(number2){
    if(number2>0){
        return 'Given number is positive'
    } else if(number2<0){
        return 'Given number is negative'
    }
    else{
        return 'Given number is zero'
    }
}
    console.log(checkNumber2(0))