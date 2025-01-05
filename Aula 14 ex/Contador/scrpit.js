function contar(){

   var inicio = document.getElementById('txti')
   var fim = document.getElementById('txtf')
   var passo = document.getElementById('txtp')
   var res = document.getElementById('divres')

     //Verifica se tem valo Valido
   if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert("[ERRO] Insira um valor e tente novamente ")
   }else{
    res.innerHTML = `Contando :  `

    //Conversao para numero 
      let i = Number(inicio.value)
      let f = Number(fim.value)
      let p = Number(passo.value)

      
      if( i < f){

        //Contagem crescente
        for(let c = i ; c <= f ; c += p){
            res.innerHTML += `${c}  \u{1F449}`
            
         }

      }else{
        //Decrescente
        for(let c = i ; c >= f ; c -= p){
            res.innerHTML += `${c}  \u{1F449}`
            
         }

      }
           res.innerHTML += `\u{1F3C1}`

  
}


}