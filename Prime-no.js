// program to check prime no.

 function isPrime(num) {
    
  for (let i = 2; i < num; i++)  
       if (num % i === 0) {
              return true;
       }else {
        return false;
       }
    }
    console.log(isPrime(10));

    function isPrime(num){
        for(let i =2; i<num ; i++)
        if(num%i===0){
            return true
        }else{
        return false
        }
    }
    console.log(isPrime(11156))

    function isPrime(num) {
    
        for (let i = 2; i < num; i++)  
             if (num % i === 0) {
                    return true;
             }else {
              return false;
             }
          }
          console.log(isPrime(40));