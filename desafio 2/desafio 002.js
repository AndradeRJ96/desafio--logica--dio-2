let numeroDeVitorias= 100
let numeroDeDerrotas= 90

nÍvel()


function nÍvel () {
   let saldoAtual = (numeroDeVitorias - numeroDeDerrotas)
   saldoAtual > 101
   saldoAtual  >= 91
   
   let nivelDeRank = saldoAtual
      if(nivelDeRank >= 101) {
       nivelDeRank = "imortal"
         }
         else if(nivelDeRank >= 91 || nivelDeRank === 100){
          nivelDeRank = "Lendario"
   }
   
        else if(nivelDeRank >= 81 || nivelDeRank === 90){
       nivelDeRank = "Diamante"
   }
   
         else if(nivelDeRank >= 51 || nivelDeRank === 80){
   nivelDeRank = "Ouro"
   }
   
         else if(nivelDeRank >= 21 || nivelDeRank === 50){
   nivelDeRank = "Prata"
   }
   
         else if(nivelDeRank >= 11 || nivelDeRank === 20){
   nivelDeRank = "Bronze"
  }
  
          else{
  nivelDeRank ="Ferro"
   }
   
   console.log("O Herói tem de saldo de " + saldoAtual +  " esta no nível " + nivelDeRank)}
