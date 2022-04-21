function findElement(arr, func) {
    for (let i=0; i< arr.length; i++ ){ 
        var num = arr[i] 
        if( func(num) == true ) {
            return num; // return caso a func. seja verdadeira. 
        }
        else{ 
            num = undefined;
        }
    }

    return num ;  // return undefined
  }
  
  findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; } )