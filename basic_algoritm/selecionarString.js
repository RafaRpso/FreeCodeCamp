function truncateString(str, num) {
    var palavrasEscolhidas = []; 

    for(let i=0;i<num;i++ ){ 
        palavrasEscolhidas.push(str[i]) 
    }

    if( !(num>=str.length) ) { 
        palavrasEscolhidas.push('...')
    }

    palavrasEscolhidas= palavrasEscolhidas.join('') // voltar a ser uma string
    console.log(palavrasEscolhidas)
    return palavrasEscolhidas;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)