let jogador = "";
let computador = "";
let opcoes = ["pedra", "papel", "tesoura"];
let resultado = "";
let placarComputador = 0;
let placarJogador = 0;

//setInterval;

const botoes = document.querySelectorAll('button')

botoes.forEach((button) => button.addEventListener('click', function (evt) { 
   jogadorEscolha = evt.target.id
   jogador = jogadorEscolha;
   computador = opcoes[Math.floor(Math.random() * 3)];
   vencedor();
}));

// Decidindo o vencedor
function vencedor(){
   if(jogador === "pedra" && computador === "pedra"){
      resultado = "Empate!";
   }
   else if(jogador === "pedra" && computador === "papel"){
      resultado = "Computador vence!"
      placarComputador++
   }
   else if(jogador === "pedra" && computador === "tesoura"){
      resultado = "Jogador vence!"
      placarJogador++
   }
   else if(jogador === "tesoura" && computador === "tesoura"){
      resultado = "Empate!";
   }
   else if(jogador === "tesoura" && computador === "papel"){
      resultado = "Jogador vence!"
      placarJogador++
   }
   else if(jogador === "tesoura" && computador === "pedra"){
      resultado = "Computador vence!"
      placarComputador++
   }
   else if(jogador === "papel" && computador === "papel"){
      resultado = "Empate!";
   }
   else if(jogador === "papel" && computador === "pedra"){
      resultado = "Jogador vence!"
      placarJogador++
   }
   else if(jogador === "papel" && computador === "tesoura"){
      resultado = "Computador vence!"
      placarComputador++
   }
}





