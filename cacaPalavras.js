const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
 "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Função para preencher com letras aleatórias
function letraRandomica() {
    return Math.floor(Math.random() * 26);
}

const palavrasChaves = ["HARRY", "HERMIONE", "ARTHUR", "JORGE", "FRED", "RONY", "SNAPE", "SIRIUS", "REMO", 
"ALASTOR", "FLEUR", "MOLLY", "ALVO", "ELIAS", "MINERVA", "RÚBEO", "DÉDALO", "GUI", "MUNDUNGO", "THIAGO"]

//Randomizar de palavras
function palavrasRandomicas(){
let tabelaSelecionada = [];
for (let i = 0; i < 3; i++){
let palavra = palavrasChaves[Math.floor(Math.random() * palavrasChaves.length)] 

    if(tabelaSelecionada.includes(palavra) === false){
        tabelaSelecionada.push(palavra)
    }
    else{
        let palavra=palavrasChaves[Math.floor(Math.random() * palavrasChaves.length)]
            tabelaSelecionada.push(palavra)
       }
    }
    return tabelaSelecionada
}

// Criação da tabela
let tabelaLetras = [];

for(let k = 0; k < 10; k++){
    tabelaLetras[k] = [];
    for(l = 0; l < 10; l++){
        tabelaLetras[k][l] = "";
    }
}

// Preenchimento das palavras
let palavrasEscondidas = palavrasRandomicas();
let linhaRandomica = Math.floor(Math.random() * 10);
let colunaRandomica = Math.floor(Math.random() * 10);

if(10 - colunaRandomica > palavrasEscondidas[0].length){
    let l = 0
    for(let i = colunaRandomica; i < i+palavrasEscondidas[0].length; i++){
        tabelaLetras[linhaRandomica][colunaRandomica] = palavrasEscondidas[0].charAt(l);
        l++
    }
}


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

//tabela com as palavras selecionadas

function showTable(n){
let aside=document.createElement('aside')
let tabua=document.createElement('p')
    aside.classList.add('tabelaDePalavras')
    tabua.textContent = JSON.stringify(n)
    document.body.appendChild(aside)
    aside.appendChild(tabua)
} 



showTable(palavrasRandomicas().toString())



criandoTabuleiro();
adicionarPalavras();


