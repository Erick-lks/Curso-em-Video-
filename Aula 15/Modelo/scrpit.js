function verificador(){

  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  
  // condiçaõ para verificar erro 
if( fano.value.length == 0 || fano.value > ano ){
    window.alert("Verifique os dados e tente novamente")
}else{
   //aqui calculo as sentenças como genero e idade
   var fsex = document.getElementsByName('radsex')
   var idade = ano - Number(fano.value)
   var img = document.createElement('img')
     img.setAttribute('id' , 'foto')


   //Verificando o genero 
var genero = ''
if(fsex[0].checked){
    genero = 'Homem'

     if( idade <= 13 && idade >= 0 ){
        //Criança
        img.setAttribute('src' , 'menino.jpg')
     }else if ( idade <= 55){
        //Adulto
        img.setAttribute('src' , ' Homem Adulto.jpg')

     }else{
        //idoso
        img.setAttribute('src' , ' Homem Idoso.jpg')


        
     }  
} else if ( fsex[1].checked){
    genero = "Mulher"

    if( idade <= 13 && idade >= 0 ){
        //Criança
        img.setAttribute('src' , 'menina.jpg')

     }else if ( idade <= 55){
        //Adulto
        img.setAttribute('src' , ' Mulher Adulta.jpg')

     }else{
        //idoso
        img.setAttribute('src' , ' Mulher Idosa.jpg')

     }    
    
}


    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    //aqui abaixo adiciono a imagem como resultado para exibição
    res.appendChild(img)
}
}   