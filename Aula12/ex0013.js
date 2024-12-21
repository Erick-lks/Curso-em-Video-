var agora = new Date()
var diaSemana = agora.getDay()

/*
0 = Domingo
1 = segunda 
2 =terça 
3 = quarta
4 =quinta 
5 = Sexta
6 = Sabado

*/
//console.log(diaSemana);

switch(diaSemana){
    case 0:
        console.log("Domingo");
        break;
        case 1:
        console.log("Segundoou");
        break;
        case 2:
        console.log("Terçouu");
        break;
        case 3:
        console.log("Quartoou");
        break;
        case 4:
        console.log("Quintou");
        break;
        case 5:
        console.log("Sextoou");
        break;
        case 6:
        console.log("Sabadoou");
        break;
        default:
            console.log("Nenhuma das Alternativas")
            break;
}