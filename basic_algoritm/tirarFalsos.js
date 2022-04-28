function bouncer(arr) {
    var nulos= [false, null, NaN, 0, undefined, ""]
    var  arr2=[]
    
  // usar um if cheio de && não permite com que o software possa se expandir com facilidade, aqui, só temos que adicionar um campo na array nulos  pra um termo indesejado

     for(let i=0;i<arr.length;i++){ 
         for(let j=0;j<nulos.length;j++){
             if(arr[i]==nulos[j]){
                 arr.splice(i,2)
                 console.log(arr)
             }
         }
     }
     for(let i=0;i<arr.length;i++){
         arr2.push(arr[i])
     }

    
     return arr2;
   }
   
   bouncer([null, NaN, 1, 2, undefined])