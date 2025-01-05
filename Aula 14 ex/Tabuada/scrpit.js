function tabuada(){
   
var num = document.getElementById('txtn')
var tab = document.getElementById( 'seltab')


if(num.value.length == 0 ){
    window.alert('[ERRO] Numero invalido!! Digite um numero valido ')
}else{
var num = Number(num.value)
var c = 1
tab.innerHTML = ' '
while(c <= 10){
    


    var item = document.createElement('option')
    item.text = `${num} X ${c} = ${num*c}`
    tab.value = `tab${c}`

    //adcinionando a variavel tabela
    tab.appendChild (item)

    c++

}
    
}



}