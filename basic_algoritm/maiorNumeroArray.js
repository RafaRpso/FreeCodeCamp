function retornarMaiorNumero(arr){ 
    var arrayMaiores = []
    for (i=0;i<arr.length;i++){ //comparar os maiores valores - linha
        let maiorValor=0; 
        for (j=0; j<arr.length;j++){ //fazer com que a variavel "maior valor" receba, por padrão, o menor número da lista, para numeros menores do que 0. antes de iniciar o programa. 
            if(maiorValor>arr[i][j]){
                maiorValor=arr[i][j]
            }
        }
        for (j=0; j<arr.length; j++ ){ //coluna 
            if(maiorValor<=arr[i][j]){
                maiorValor=arr[i][j]
            }
            
        }
        arrayMaiores.push(maiorValor)
        }
        return arrayMaiores
}
retornarMaiorNumero([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])
