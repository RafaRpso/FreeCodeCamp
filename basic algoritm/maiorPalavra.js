function findLongestWordLength(str) {
    str=str.split(' ')
    var maiorPalavra=' a'; 

    for (i=0;i<str.length;i++){
        if(str[i].length>maiorPalavra.length){ 
            maiorPalavra=str[i]
        }
    }    return maiorPalavra.length;
  }
  
  findLongestWordLength("May the force be with you");
