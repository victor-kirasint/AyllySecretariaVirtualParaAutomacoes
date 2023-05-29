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
    document.getElementById("porta").style.backgroundColor="#2e2d2d"
    document.getElementById("porta").style.border="#2e2d2d"
    document.getElementById("abrirporta").style.display="block"

  }
  else{
    DesligaLED()
    botaocont=1
    document.getElementById('abrirporta').style.display="none";
    document.getElementById('abrirporta2').style.display="block"
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
    clearTimeout(tempodelay)
    botaocont = 1
  }
  
}





