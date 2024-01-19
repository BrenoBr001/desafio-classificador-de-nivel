// #Desafio DIO em JS
// Classificador de Nível de Herói
let nomeHeroi = "Debugador de códigos";
let nivel;
let experienciaXp = 10500;

if(experienciaXp <= 1000){
    nivel = "FERRO"
}else if(experienciaXp >1000 && experienciaXp <=2000){
    nivel = "BRONZE"
}else if(experienciaXp >2000 && experienciaXp <=5000){
    nivel = "PRATA"
}else if(experienciaXp >5000 && experienciaXp <=7000){
    nivel = "OURO"
}else if(experienciaXp >7000 && experienciaXp <=8000){
    nivel = "PLATINA"
}else if(experienciaXp >8000 && experienciaXp <= 9000){
    nivel = "ASCENDENTE"
}else if(experienciaXp >9000 && experienciaXp <= 10000){
    nivel = "IMORTAL"
}else if(experienciaXp >10000){
    nivel = "RADIANTE"
}



console.log("Este é o grande "+ nomeHeroi + " ,seu nível de experiência é de: "+experienciaXp +
"XP = Seu título atual é de " + nivel+ "!")


