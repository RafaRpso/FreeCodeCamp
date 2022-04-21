// não pode usar endsWith();  
function confirmEnding(str, target) {
    //recebe as letras finais 
    var verificacao=false;
    letraStr=[]
    let i =0 ; 
    while(i<target.length){ 
       
        letraStr.push(str[str.length-(i+1)]) ; i++ // - (i+1) pra ajustar pra posição 0 e ela não ficar undefined][
    }
    letraStr.reverse();  // como eu tava puxando ao contrário, reverti para ficar na mesma ordem
    console.log("LetrasSTR - " + letraStr)
    for(i=0;i<letraStr.length;i++){  // verificacao das letras
        console.log("LetrasSTR "+ i  + " " + letraStr[i] +" \n " + "TARGETSTR "+ i + " " + target[i])
        if(letraStr[i]==target[i]){ 
            verificacao=true; 
        }
        else { 
            verificacao=false; 
            break;
        }
    }
    console.log(verificacao)
    return verificacao;
    }
  
  
  confirmEnding("Open sesame", "game"); 