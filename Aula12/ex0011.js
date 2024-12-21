var idade = 85

console.log(`Você tem ${idade} anos.`)

if(idade < 16){
    console.log("Nao vota!")
}else
    if( idade < 18 || idade > 65){
        console.log("Voto Opcional ")
    }
else {
    console.log("O Voto é Obrigatorio")
}
