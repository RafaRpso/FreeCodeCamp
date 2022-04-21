function repeatStringNumTimes(str, num) {
    var repetidas=''
    for (i=0; i<num ; i++ ){ 
        repetidas+=str; 
    }
    console.log(repetidas)
    return repetidas;
  }
  
  repeatStringNumTimes("*", -2);