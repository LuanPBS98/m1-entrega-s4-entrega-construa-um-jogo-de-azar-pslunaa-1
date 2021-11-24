const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
 "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Função para preencher com letras aleatórias
function letraRandomica() {
    return Math.floor(Math.random() * 26);
}

const palavrasChaves = ["HARRY", "HERMIONE", "ARTHUR", "JORGE", "FRED", "RONY", "SNAPE", "SIRIUS", "REMO", 
"ALASTOR", "FLEUR", "MOLLY", "ALVO", "ELIAS", "MINERVA", "RÚBEO", "DÉDALO", "GUI", "MUNDUNGO", "THIAGO"]
const linhasChaves = [0,1,2,3,4,5,6,7,8,9]

// Selecionar palavras randomicamente
function palavrasRandomicas(){
let tabelaSelecionada = [];
    for (let i = 0; tabelaSelecionada.length < 3; i++){
    let palavra = palavrasChaves[Math.floor(Math.random() * palavrasChaves.length)] 
        if(tabelaSelecionada.includes(palavra) === false){
            tabelaSelecionada.push(palavra)
        }
    }
    return tabelaSelecionada
}

function linhasRandomicas(){
let linhaSelecionada = [];
    for (let i = 0; linhaSelecionada.length < 3; i++){
        let linhaX = linhasChaves[Math.floor(Math.random() * linhasChaves.length)] 
        if(linhaSelecionada.includes(linhaX) === false){
            linhaSelecionada.push(linhaX)
        }
    }
    return linhaSelecionada
}

// Criação da tabela
let tabelaLetras = [];

for(let x = 0; x < 10; x++){
    tabelaLetras[x] = [];
    for(let y = 0; y < 10; y++){
        console.log(tabelaLetras)
        if(tabelaLetras[x][y] === undefined){
            tabelaLetras[x][y] = alfabeto[letraRandomica()]
        }
    }
}
// Preenchimento das palavras no tabuleiro
let palavrasEscondidas = palavrasRandomicas()
let linhaRandomica = linhasRandomicas()

console.log(linhaRandomica)

function adicionarPalavras (str,indice){
let colunaRandomica = Math.floor(Math.random() * (11 - str.length));
    let m = 0;
    let limitador = str.length+colunaRandomica
    for(let i = colunaRandomica; i < limitador; i++){
        tabelaLetras[linhaRandomica[indice]][i] = str.charAt(m);
        m++
        }
    }
for(let a = 0; a < palavrasEscondidas.length; a++){
        adicionarPalavras(palavrasEscondidas[a],a);
}
  
// Criação do tabuleiro 
const containerTabuleiro = document.getElementsByTagName("main")[0];
const tabela = document.createElement("table");
containerTabuleiro.appendChild(tabela);

function criandoTabuleiro(){
   for (let i = 0; i < 10; i++){
       let linha = document.createElement("tr");
       linha.setAttribute("linha", i);
        for(let j = 0; j < 10; j++){
            let coluna = document.createElement("td");
            coluna.setAttribute("coluna", j);
            coluna.classList.add('celula');
            coluna.innerText = tabelaLetras[i][j];
            linha.appendChild(coluna);
        }
        tabela.appendChild(linha);
   }
}

/* Dev_Luan */

//dicionário de palavras

//Lista de palavras presentes no tabuleiro;

function showTable(n){
let aside=document.createElement('aside')
let tabua=document.createElement('p')
    aside.classList.add('tabelaDePalavras')
    tabua.textContent = JSON.stringify(n)
    document.body.appendChild(aside)
    aside.appendChild(tabua)
} 

showTable(palavrasEscondidas.toString())


criandoTabuleiro();
