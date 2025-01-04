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
       //Verifica se o incremento e vazio
    if (incremento === 0 || isNaN(incremento)) {
        window.alert('O incremento não pode ser 0. Tente novamente!');
        return;
    }

    var numeros = []; 

    //Laço para contagem 
    for (var i = inicio; i <= fimValor; i += incremento) {
        numeros.push(i);
        numeros.innerHTML += ` ${i} `
    }

    //Resultados e exibição 
    var contadorres = document.getElementById('contagem');
    contadorres.innerHTML = `Sequência: ${numeros.join('\u{1f449}')}`;
    contadorres.innerHTML += `\u{1f3c1}`;
}



