//capturando o conteúdo dos span de hora, minuto e segundo com o comando document.querySelector.
//Fazendo a relação do documento com o js

const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')                                     
const segundos = document.querySelector('#segundos')

// propriedade setInterval do JavaScript para definir um intervalo de tempo em que determinado código deve ser executado.
// getHours(), getMinutes() e getSeconds() capturam as horas, minutos e segundos atuais, de forma separada, a partir da data obtida. 
setInterval (() => {
    let date = new Date(); //esse método captura a data atual
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    horas.innerHTML = `${formatTime(hours)}`;
    minutos.innerHTML = `${formatTime(minutes)}`;
    segundos.innerHTML = `${formatTime(seconds)}`;

}, 1000);

function formatTime(time){
    return time < 10 ? "0" + time : time;
}