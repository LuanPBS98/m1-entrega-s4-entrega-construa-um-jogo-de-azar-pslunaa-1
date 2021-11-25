let jogador = "";
let computador = "";
let opcoes = ["pedra", "papel", "tesoura"];
let resultado = "";
let usuario = "";
let placarComputador = 0;
let placarJogador = 0;


const nomeUsuario = document.getElementsByClassName('start')[0];
const user = document.getElementById('User');

const boxUser = document.getElementsByClassName('nome-jogador')[0];
const escolhaPedra = document.getElementsByClassName('cardEscolha')[0];
const escolhaPapel = document.getElementsByClassName('cardEscolha')[1];
const escolhaTesoura = document.getElementsByClassName('cardEscolha')[2];
const aparecer = document.getElementsByClassName('esconder')[2];

const botoes = document.querySelectorAll('button')
const placarJ = document.getElementsByTagName('h3')[0];
const placarC = document.getElementsByClassName('esconder')[1]
const placarEscondido = document.getElementsByClassName('esconder1')[0];


// Atribuindo nome de usuário e Botão Jogar;
nomeUsuario.addEventListener('click', function (){
   usuario = user.value;
   placarJ.innerText = user.value + ": ";
   boxUser.classList.remove('nome-jogador')
   boxUser.classList.add('esconder')
   aparecer.classList.remove('esconder')
   aparecer.classList.add('aparecer')
   placarJ.classList.remove('esconder')
   placarC.classList.remove('esconder')
   placarJ.classList.add('placarAparecer')
   placarC.classList.add('placarAparecer')
   placarEscondido.classList.remove('esconder1')
   placarEscondido.classList.add('placar');
})


// Botões de Escolha de opção
const pontosComputador = document.getElementById('computador');

botoes.forEach((button) => button.addEventListener('click', function (evt) { 
   jogadorEscolha = evt.target
   jogador = jogadorEscolha.id;
   console.log(jogadorEscolha);
   computador = opcoes[Math.floor(Math.random() * 3)];
   vencedor();
   placarJ.innerText = usuario + ": " + placarJogador;
   pontosComputador.innerText = " " + placarComputador;
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

//Exibindo escolhas do jogador e do computador
// Nome do usuário - GIF representativo - Nome da escolha;
 
function remocaoCardsInclusaoEscolhas(){
   const cardBox = document.createElement("div");

}


