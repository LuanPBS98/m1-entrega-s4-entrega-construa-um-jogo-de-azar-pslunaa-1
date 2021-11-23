const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
 "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function letraRandomica() {
    return Math.floor(Math.random() * 26);
}

let tabelaLetras = [];

for(let k = 0; k < 10; k++){
    tabelaLetras[k] = [];
    for(l = 0; l < 10; l++){
        tabelaLetras[k][l] = alfabeto[letraRandomica()];
    }
}

const containerTabuleiro = document.getElementsByTagName("main")[0];
const tabela = document.createElement("table");
containerTabuleiro.appendChild(tabela);

function criandoTabuleiro(){

   for (let i = 0; i < 10; i++){
       let linha = document.createElement("tr");
        for(let j = 0; j < 10; j++){
            let coluna = document.createElement("td");
            coluna.classList.add('celula');
            coluna.innerText = tabelaLetras[i][j];
            linha.appendChild(coluna);
        }
        tabela.appendChild(linha);
   }
}
criandoTabuleiro();

/* Dev_Luan*/

const palavrasChaves = ["HARRY", "HERMIONE", "ARTHUR", "JORGE", "FRED", "RONY", "SNAPE", "SIRIUS", "REMO", 
"ALASTOR", "FLEUR", "MOLLY", "ALVO", "ELIAS", "MINERVA", "RÚBEO", "DÉDALO", "GUI", "MUNDUNGO", "THIAGO"]

function randomizerWord(){
let randomLetter = []
    for(let i = 0;i < 3;i++){
        randomLetter.push(palavrasChaves[(Math.floor(Math.random() * palavrasChaves.length))]) 
    }
    return randomLetter
}
console.log(randomizerWord())

