let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#Flista')
let res = document.querySelector('div#divres')
let valores = [];



function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inList(n , l){

    if(l.indexOf(Number(n)) != -1){   //-1 significa que nao encontrou

        return true
    }else{
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inList(num.value, valores)){

        valores.push(Number(num.value))
        let item = document.createElement('option') //Cria a instacia do numero para adicionar na lista
        item.text = `Valor ${num.value} Adicionado!!`
        lista.appendChild(item)
        res.innerHTML = ''
        

    }else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }

    num.value = ''
    num.focus()
}


function finalizar(){
if(valores.length == 0){

    document.alert('Adicione números para Analisar')
}else{
   let tot = valores.length
   let maior = valores[0]
   let menor = valores[0]
   let soma = 0
   let media = 0 


   


   for(let pos in valores){
    soma += valores[pos]

    if(valores[pos] > maior){
        maior = valores[pos]
    }
    if(valores[pos] < menor){
        menor = valores[pos]
    }
   }

   media = soma / tot

   res.innerHTML = ' '
   res.innerHTML += ` <p> Ao Todo, temos ${tot} números cadastrados . </p>`
   res.innerHTML += ` <p> O maior valor informado foi ${maior} . </p>`
   res.innerHTML += ` <p> O menor valor informado foi ${menor} . </p>`
   res.innerHTML += ` <p> Somando todos os valores , temos  ${soma} . </p>`
   res.innerHTML += ` <p> A média temos  ${media} . </p>`


}
}