


function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var hora = 15

    msg.innerHTML = `Agora são ${hora} horas.`


    if( hora >= 0 && hora < 12 ){
      // Bom Dia!!
    img.src = 'fotomanha.jpg'
    document.body.style.background = '#e0de6573'
    }else if ( hora >= 12 && hora < 18 ){

    //Boa Tarde
      img.src = 'fototarde.jpg'
      document.body.style.background = '#f07840'

    }else{
   //boa noite
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#5a585a70'


    }}
