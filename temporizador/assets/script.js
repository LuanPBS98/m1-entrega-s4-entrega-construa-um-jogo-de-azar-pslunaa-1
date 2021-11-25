let seg = 0
let min = 0


function start(){
  stop = setInterval(temporizador,1000)
}
let stop
function pause(){
  clearInterval(stop)
}

function temporizador(){
seg++
  if(seg === 60){
    min++
    seg=0
  }
  if(min === 60){
    hrs++
    min=0
  }
  document.getElementById('timer').innerText= min + ':' + seg
}





