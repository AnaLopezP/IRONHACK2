const alumnos = []
function generarContrasenaAleatoria(minLength, maxLength) {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  const longitud = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  let contrasena = "";

  for (let i = 0; i < longitud; i++) {
    const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    contrasena += caracterAleatorio;
  }

  return contrasena;
}

// Uso de la función para generar una contraseña aleatoria entre 10 y 50 caracteres
const contrasenaGenerada = generarContrasenaAleatoria(10, 50);
console.log(contrasenaGenerada);


function crearalumnos(lista, contraseña) {
  for (let persona= 1; persona<9; persona++){
    let contra = Math.floor(Math.random())
    lista.push({
      nombre: `alumno${persona}`,
      contraseña: generarContrasenaAleatoria(10, 50)
    })
  }
}

crearalumnos(alumnos);
console.log("ALUMNOS")
console.log(alumnos);

let contras = alumnos.map(function(alumno){
  return alumno.contraseña
})

console.log("CONTRASEÑAS DE LOS ALUMNOS")
console.log(contras)
contras.sort((a, b) => b.length - a.length)

let contraseñasLargas = contras.slice(0, 3)
console.log("CONTRASEÑAS MÁS LARGAS")
console.log(contraseñasLargas)

let alumnosContraLarga = alumnos.filter(function(alumno) {
    return contraseñasLargas.includes(alumno.contraseña); //Con esto miro si la contraseña de alumno.contraseña esta incluida en la lista
})

console.log(alumnosContraLarga)
let alumnosDefinitivos = alumnosContraLarga.map(function(alumno) {
  return {
    nombre: alumno.nombre,
    contraseña: alumno.contraseña,
    longitud: length
  }
})

//no funca