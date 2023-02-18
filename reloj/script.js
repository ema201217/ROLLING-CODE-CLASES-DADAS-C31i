const divReloj = document.querySelector('#reloj')

const horas = document.querySelector('#reloj-horas')
const minutos = document.querySelector('#reloj-minutos')
const segundos = document.querySelector('#reloj-segundos')

const imgAlarma = document.querySelector('#alarma-imagen')


const ceroALaIzquierda = (num) => num < 10 ? `0${num}` : num

setInterval(() => {
/* divReloj.innerHTML = new Date().toLocaleTimeString() */

const time = new Date() 
const timeHours = time.getHours()
const timeMinutes = time.getMinutes()
const timeSeconds = time.getSeconds()

horas.innerHTML = ceroALaIzquierda(timeHours)
minutos.innerHTML = ceroALaIzquierda(timeMinutes)
segundos.innerHTML = ceroALaIzquierda(timeSeconds)

if(timeSeconds == 10){
  imgAlarma.style.display = 'block'
}

}, 1000);