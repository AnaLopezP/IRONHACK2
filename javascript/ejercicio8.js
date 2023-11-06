let persona1 = {
    Nombre: "Maria",
    Apellido: "Amapola"
  }
  let persona2 = {
    Nombre: "Chan",
    Apellido: "Bang"
  }
  let persona3 = {
    Nombre: "Geon woo",
    Apellido: "Beom"
  }
  let persona4 = {
    Nombre: "Sebas",
    Apellido: "Tian"
  }
  let persona5 = {
    Nombre: "Mara",
    Apellido: "Villosa"
  }
  let listaPersona = [persona1, persona2, persona3, persona4, persona5];
  let arma1 = {
    Nombre: "Pesa",
    Peso: "100kg"
  }
  let arma2 = {
    Nombre: "Cuchillo",
    Peso: "20g"
  }
  let arma3 = {
    Nombre: "Pistola",
    Peso: "3kg"
  }
  let arma4 = {
    Nombre: "Motosierra",
    Peso: "40kg"
  }
  let arma5 = {
    Nombre: "Lanzallamas",
    Peso: "35kg"
  }
  let arma6 = {
    Nombre: "Lanzagranadas",
    Peso: "53kg"
  }
  let arma7 = {
    Nombre: "Maceta",
    Peso: "5kg"
  }
  let armas = [arma1, arma2, arma3, arma4, arma5, arma6, arma7];
  
  let room1 = {
    Nombre: "Cocina"
  }
  let room2 = {
    Nombre: "Terraza"
  }
  let room3 = {
    Nombre: "Salón"
  }
  let room4 = {
    Nombre: "Baño"
  }
  let room5 = {
    Nombre: "Sótano"
  }
  let habitaciones = [room1, room2, room3, room4, room5];
  
  function seleccionador(array) {
    let num = Math.floor(Math.random() * 7) + 1;
    console.log(num);
    if (num < array.length) {
      console.log(array[num]);
      return array[num];
    }
    else (console.log("No ha habido ninigún asesinato"))
  }
  
  seleccionador(habitaciones)
  seleccionador(listaPersona)
  seleccionador(armas)