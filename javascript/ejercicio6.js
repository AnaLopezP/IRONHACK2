// Crear un array con los nombres de los alumnos presentes en clase
const alumnosEnClase = ["Ana", "Andrea", "Ajusshi", "Bang Chan", "Sebas", "Nata", "Cleo", "Charles"];

// Función para crear parejas aleatorias
function crearParejasAleatorias(lista) {
  // Mezclar la lista en un orden aleatorio
  const listaMezclada = lista.sort(() => Math.random() - 0.5);

  // Crear parejas a partir de la lista mezclada
  const parejas = [];
  for (let i = 0; i < listaMezclada.length; i += 2) {
    if (i + 1 < listaMezclada.length) {
      parejas.push([listaMezclada[i], listaMezclada[i + 1]]);
    } else {
      // Si quedó un elemento sin pareja, agrégalo a una pareja individual
      parejas.push([listaMezclada[i]]);
    }
  }

  return parejas;
}

// Crear parejas aleatorias
const parejasAleatorias = crearParejasAleatorias(alumnosEnClase);

// Imprimir dos parejas diferentes
let objparejas = {
  pareja1: parejasAleatorias[0],
  pareja2: parejasAleatorias[1],
  pareja3: parejasAleatorias[2],
  pareja4: parejasAleatorias[3],
};

console.log(objparejas.pareja1);
console.log(objparejas.pareja2);
console.log(objparejas.pareja3);
console.log(objparejas.pareja4);