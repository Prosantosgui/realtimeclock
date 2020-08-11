let nome = prompt("Informe seu nome: ")
function mensagem() {
  let tempo = new Date();
  var numDiaSemana = tempo.getDay();
  let nomeDiaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  let dia = zero(tempo.getDate());
  let mes = zero(tempo.getMonth() +1);
  //ano: getFullYear()
  let ano = tempo.getFullYear()
  //relogio: getHours() (0-23); getMinutres(); getSeconds();
  let hora = zero(tempo.getHours());
  let minuto = zero(tempo.getMinutes())
  let segundo = zero(tempo.getSeconds())



  document.getElementById("msg").textContent = `Olá, bem-vindo ${nome}. ${nomeDiaSemana[numDiaSemana]}.  ${dia}/${mes}/${ano}, ${hora}:${minuto}:${segundo}.`;
}

function zero(valor){
  if (valor < 10){
    return "0"+valor;
  } else{
    return valor;
  }

}

setInterval(function(){mensagem();},1000)
mensagem();