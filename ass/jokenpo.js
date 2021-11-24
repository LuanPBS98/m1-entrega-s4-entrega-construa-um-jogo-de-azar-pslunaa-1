let jogador = ""

const botoes = document.querySelectorAll('button')
console.log(botoes)
botoes.forEach((button) => button.addEventListener('click', function (evt) { 
   jogadorEscolha = evt.target.id
    
}))




