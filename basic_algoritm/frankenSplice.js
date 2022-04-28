function frankenSplice(arr1, arr2, n) {
    var arr3=[]
    //®eceber val 1 array 2 
    for(let i=0;i<n;i++){ 
        arr3.push(arr2[i])
    }
    //receber 1° array 
    for(let i=0;i<arr1.length;i++){ 
        arr3.push(arr1[i])
    }
    //receber val onde parou array 2 
    
    for(let pseudon=n,i=0;i<n;i++){
        if(arr2[i+n]!=undefined){ 
            arr3.push(arr2[i+n])
        }
    }
    return (arr3);
  }
  
  frankenSplice([1, 2, 3, 4], [], 0)
  // [4, 1, 2, 3, 5].