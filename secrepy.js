botaocont = 0
function OnOff() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "http://192.168.0.165/LED");
  xmlhttp.send();
}
function DesligaLED() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "http://192.168.0.165/LEDOFF");
  xmlhttp.send();
}
function acionafuncao(){
  if(botaocont==1){
    OnOff()
    setTimeout(DesligaLED, 20000)
    botaocont=0
    document.getElementById("abrir").style.background="#52D9D9"

  }
  else{
    DesligaLED()
    botaocont=1
    document.getElementById("abrir").style.background="#E30B5F"
  }

}

function programar1(){
  // Definindo o tempo em horas, minutos e segundos
  const horas = prompt("Digite quantas horas");
  const minutos = prompt("Digite Quantos Minutos");
  const segundos = prompt("Digite Quantos Segundos");
  // Convertendo o tempo para milissegundos
  const tempoEmMilissegundos = (horas * 3600 + minutos * 60 + segundos) * 1000;
  // Executando a primeira função
  // Executando a segunda função após o tempo definido
  setTimeout(OnOff, tempoEmMilissegundos);
  }
function programar2(){
  const horas = prompt("Digite quantas horas");
  const minutos = prompt("Digite Quantos Minutos");
  const segundos = prompt("Digite Quantos Segundos");
  // Convertendo o tempo para milissegundos
  const tempoEmMilissegundos = (horas * 3600 + minutos * 60 + segundos) * 1000;
  // Executando a primeira função
  // Executando a segunda função após o tempo definido
  setTimeout(DesligaLED, tempoEmMilissegundos);
  const tempodelay = setTimeout(DesligaLED, tempoEmMilissegundos);
  }
 

function programarhorario(){
  if(botaocont==1){
    botaocont = 0
    programar1()
    document.getElementById("programar").style.background="#52D9D9"
    setTimeOut(DesligaLED, 20000)
  
    document.getElementById("programar").style.background="#E30B5F"

  }
  else{
    DesligaLED();
    clearTimeout()
    botaocont = 1
    document.getElementById("programar").style.background="#E30B5F"
  }
  
}





