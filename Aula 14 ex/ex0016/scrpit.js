function contador() {



    //Converter  de text para Number
    var inicio = Number(document.getElementById('inicioNumber').value);
    var fimValor = Number(document.getElementById('fimNumber').value);
    var incremento = Number(document.getElementById('passoNumber').value);

    //Verificar se ta vazio
    if (isNaN(inicio) || isNaN(fimValor) || inicio === 0 || fimValor === 0) {
        window.alert('Verifique os valores de Início e Fim e tente novamente');
        return;
    }

    if (incremento === 0 || isNaN(incremento)) {
        window.alert('O incremento não pode ser 0. Tente novamente!');
        return;
    }

    var numeros = []; 

    
    for (var i = inicio; i <= fimValor; i += incremento) {
        numeros.push(i);
    }

   
    var contadorres = document.getElementById('contagem');
    contadorres.innerHTML = `Sequência: ${numeros.join(', ')}`;
}



