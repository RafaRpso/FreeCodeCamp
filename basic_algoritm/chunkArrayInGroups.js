function chunkArrayInGroups(arr, size) {
    var arr2=[]
    var aux=0;
    //definindo tamanho da matriz
    for(let i=0; i<arr.length/size; i++){ 
        arr2[i]=[]
    }
    for(let i=0 ; i<arr2.length; i++){ 
        for(let j=0 ; j<size; j++){
            arr2[i][j] = arr[aux]
            
            if(arr2[i][j]==undefined){
                arr2[i].splice(j,2)
                break;
            }
            aux++;
        }
    }
    return arr2;
  } // terminei xd
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) 