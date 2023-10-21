// 1 Desafio Classificador de nível de Herói 
// Objetivorie uma variável para armazenar o nome e a quantidade de experiência (XP) 
//de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mens
//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 6.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante
// Saída
//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"

let nomeDoHeroi= "Aquiles"
let xpDoHeroi = 50
let nivelDoHeroi= ""
switch(true){
case xpDoHeroi >=10001:
nivelDoHeroi ="Radiante"
break;
case xpDoHeroi >=9001 && xpDoHeroi <=10000 : 
nivelDoHeroi= "Imortal"
break;
case xpDoHeroi >=8001 && xpDoHeroi <=9000 : 
nivelDoHeroi= "Ascendente"
break;
case xpDoHeroi >=7001 && xpDoHeroi <=8000 : 
nivelDoHeroi= "Platina"
break;
case xpDoHeroi >=6001 && xpDoHeroi <=7000 : 
nivelDoHeroi= "Ouro"
break;
case xpDoHeroi >= 2001 && xpDoHeroi <=5000 : 
nivelDoHeroi= "Prata"
break;
case xpDoHeroi >= 1001 && xpDoHeroi <= 2000 :
nivelDoHeroi= "Bronze"
break;
default:
nivelDoHeroi ="ferro"
}
console.log ("O Herói de nome "+ nomeDoHeroi + " está no nível de " + nivelDoHeroi)