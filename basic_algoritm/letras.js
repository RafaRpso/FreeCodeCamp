function mutation(arr) {
    bool = true ; 
    
    for(i=0;i<arr.length;i++){ 
        arr[i] = arr[i].toLowerCase()
    }
    
    for(i=0 ; i<arr[0].length ;i++ ){
        for( j=0;j< arr[1].length; j++){   
            if( arr[0].indexOf (arr[1][j])==-1) { 
                return bool=false
            }
        }
    }
        return bool
   }
   mutation(["hello", "neo"])
     //true