// const respuesta = prompt("Ingresar edad");

/* let msg = "";
if (respuesta < 18) {
  msg = "Eres menor de edad";
} else {
  msg = "Eres mayor de edad";
} */

// comprobación ? siEsVerdadero : siEsFalso
// const msg = respuesta < 18 ? "Eres menor de edad" : "Eres mayor de edad"


const respuesta2 = prompt("Ingresar un numero entre 40 y 100");

// let msg2 = ''
/* if(respuesta2 < 40){
  msg2 = `El numero ${respuesta2} es menor a 40`
}else if (respuesta2 > 100){
  msg2 = `El numero ${respuesta2} es mayor a 100`
} else {
  msg2 = "Respuesta valida!!!"
} */

// comprobación ? siEsVerdadero : siEsFalso
const msg2 = respuesta2 < 40
? `El numero ${respuesta2} es menor a 40`
: respuesta2 > 100
? `El numero ${respuesta2} es mayor a 100`
: "Respuesta valida!!!"

document.body.innerHTML = msg2;