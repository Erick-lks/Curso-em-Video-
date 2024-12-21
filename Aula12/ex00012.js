
var agora = new Date() 
var hora = agora.getHours()

console.log(` A hora atual é ${hora} horas!`)

if( hora <= 12){
    console.log("Esta ainda de manhã")
}else if (hora < 18){
    console.log ("Esta de Tarde ")

}else{
    console.log("Esta de Noite!")
}