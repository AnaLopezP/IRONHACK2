//defino un numero secreto aleatorio del 0 al 100
const secretNumber = Math.floor(Math.random()*101);

//ponemos el contador en 1, ya que el programa empieza en el primer intento
let contador = 1

function checkGuess(e) {
  //guardamos la respuesta del usuario en una variable, en el campo guess-input
  let respuesta = document.getElementById("guess-input").value;
  console.log(respuesta);
  //Esto indica que el botón está en funcionamiento
  e.preventDefault();
  console.log('I am working');
  //Aquí enviamos un mensaje al usuario dependiendo de su respuesta, y le indicamos el número de intentos que lleva.
  if (respuesta == secretNumber) {
    console.log(`Felicidades, has acertado. Número de intentos: ${contador}`)
    alert(`Felicidades, has acertado. Número de intentos: ${contador}`)
    
  }
  else if (respuesta > secretNumber) {
    console.log(`Es demasiado alto. Número de intentos: ${contador}`)
    alert(`Es demasiado alto. Número de intentos: ${contador}`)
    contador++
  }
  
  else if (respuesta < secretNumber) {
    console.log(`Es demasiado bajo. Número de intentos: ${contador}`)
    alert(`Es demasiado bajo. Número de intentos: ${contador}`)
    contador++
  }
}

//Aquí relacionamos el botón de la web con la variable boton que vamos a utilizar
let boton = document.getElementById("guess-btn");
//indicamos que se active la función checkGuess cuando se cliqué el boton
boton.onclick = function(e){checkGuess(e)};

console.log(boton)