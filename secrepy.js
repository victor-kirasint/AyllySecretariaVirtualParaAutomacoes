botaocont = 0
luzcont = 0
function OnOff() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "http://10.0.0.100/LED");
  xmlhttp.send();
}
function DesligaLED() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "http://10.0.0.100/LEDOFF");
  xmlhttp.send();
}
function acionafuncao(){
  if(botaocont==1){
    OnOff()
    setTimeout(DesligaLED, 20000)
    botaocont=0
    document.getElementById("portaa").style.backgroundColor="#4EF5CD"

  }
  else{
    DesligaLED()
    botaocont=1
    document.getElementById("portaa").style.background="#E84195"
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
  setTimeout(OnOff, tempoEmMilissegundos);
  }
  const tempodelay = setTimeout(DesligaLED, tempoEmMilissegundos);

function programarhorario(){
  if(botaocont==1){
    programar1()
    setTimeOut(DesligaLED, 20000)
    botaocont = 0
  }
  else{
    DesligaLED();
    clearTimeout()
    botaocont = 1
  }
}  
function mudacor1(){
  document.getElementById("pc").style.background="#4F83F8"
}
function mudacor2(){
  document.getElementById("reset").style.background="#4F83F8"
}
function pc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "http://10.0.0.100/PCON");
  xmlhttp.send();
  document.getElementById("pc").style.background="#4EF5CD"
  setTimeout(mudacor1, 2000)
  
}
function reset() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "http://10.0.0.100/PCRESET");
  xmlhttp.send();
  document.getElementById("reset").style.background="#4EF5CD"
  setTimeout(mudacor2, 2000)
}
function luz() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "http://10.0.0.100/LED2");
  xmlhttp.send();
  document.getElementById("luz").style.backgroundColor="#4EF5CD"
}
function luzoff() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "http://10.0.0.100/LED2OFF");
  xmlhttp.send();
  document.getElementById("luz").style.background="#E84195"
}
function acionaluz(){
  if (luzcont == 0){
    luz()
    luzcont = 1
  }
  else{
    luzoff()
    luzcont = 0
  }
}






