const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
 "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Função para preencher com letras aleatórias
function letraRandomica() {
    return Math.floor(Math.random() * 26);
}

//arrays
const palavrasChaves = ["HARRY", "HERMIONE", "ARTHUR", "JORGE", "FRED", "RONY", "SNAPE", "SIRIUS", "REMO", 
"ALASTOR", "FLEUR", "MOLLY", "ALVO", "ELIAS", "MINERVA", "RÚBEO", "DÉDALO", "GUI", "MUNDUNGO", "THIAGO"]
const numeroLinhas=[0,1,2,3,4,5,6,7,8,9]
const numeroColuna=[0,1,2,3,4,5,6,7,8,9]

//Randomizar de palavras
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
let finalWord = palavrasRandomicas()
console.log(palavrasRandomicas())

//Randomizar linhas
function linhasRandomizadas(){
let linha = [];

    for (let i = 0;linha.length < 3; i++){
    let linhaRandomica = numeroLinhas[Math.floor(Math.random() * numeroLinhas.length)] 
        if(linha.includes(linhaRandomica) === false){
            linha.push(linhaRandomica)
        } 
    }
    return linha
}
console.log(linhasRandomizadas())

//Randomizar colunas
function colunasRandomizadas(){
let coluna = [];
    
    for (let i = 0;coluna.length < 3; i++){
    let colunaRandomica = numeroColuna[Math.floor(Math.random() * numeroColuna.length)] 
        if(coluna.includes(colunaRandomica) === false){
            coluna.push(colunaRandomica)
        } 
    }
    return coluna
}
console.log(colunasRandomizadas())

// Criação da tabela
let tabelaLetras = [];

for(let k = 0; k < 10; k++){
    tabelaLetras[k] = [];
    for(l = 0; l < 10; l++){
        tabelaLetras[k][l] = "";
    }
}

// Preenchimento das palavras

  
function adicionarPalavras (){
let palavrasEscondidas = palavrasRandomicas();
let linhaRandomica = linhasRandomizadas()
let colunaRandomica = colunasRandomizadas()
let colunaRestrita = colunaRandomica[0]
console.log(colunaRestrita)
            
if((10 - colunaRandomica) > palavrasEscondidas[0].length){
    let m = 0;
    let limitador = palavrasEscondidas[0].length+colunaRandomica
    
    for(let i = colunaRandomica; i <= limitador; i++){
        tabelaLetras[linhaRandomica[0]][i] = palavrasEscondidas[0].charAt(m);
        m++
                    console.log(tabelaLetras[linhaRandomica][i]);
                    console.log(colunaRandomica+"Coluna");
                    console.log(palavrasEscondidas+"Palavras");
            }
        }
    }
    
    adicionarPalavras();  


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



// showTable(palavrasRandomicas().toString())



criandoTabuleiro();

/*guardando palavras
let palavrasSorteadas = palavrasRandomicas()
let palavraUm = palavrasSorteadas[0].split('')
let palavraDois = palavrasSorteadas[1].split('')
let palavraTres = palavrasSorteadas[2].split('')

randomizando linhas

let coluna = document.getElementsByTagName('td')

console.log(x)*/
