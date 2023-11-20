let nombres = ["Alejandro","Sofía","Mateo","Valentina","Sebastián","Isabella","Juan","Camila","Diego","Victoria","Lucas","Gabriela","Carlos","Mariana","Daniel","Ana","Andrés","Natalia","José","Laura"];
let apellidos = ["García","Rodríguez","López","Martínez","Pérez","Sánchez","Romero","González","Díaz","Fernández","Torres","Ruiz","Jiménez","Moreno","Alvarez","Herrera","Medina","Castro","Vargas","Ramos"];
let idiomas = ["Inglés","Español","Francés","Alemán","Italiano","Portugués","Chino (Mandarín)","Japonés","Coreano","Árabe","Ruso","Hindi","Bengalí","Persa","Turco","Holandés","Sueco","Danés","Noruego","Finlandés"];
let calles = ["Avenida de la Libertad","Calle del Sol","Paseo de la Luna","Callejón del Recuerdo","Avenida de las Flores","Calle del Bosque","Paseo de la Esperanza","Callejón de los Sueños","Avenida de la Imaginación","Calle del Arco Iris","Paseo de la Aventura","Callejón de la Fantasía","Avenida de la Creatividad","Calle del Silencio","Paseo de la Tranquilidad","Callejón de la Serenidad","Avenida de la Inspiración","Calle del Tiempo","Paseo de la Reflexión"];

function listarandom() {
  let lista = []
  let numelem = Math.floor(Math.random()*2) + 1;
  for (let i = 1; i <= numelem; i++) {
    let numidiom = Math.floor(Math.random()*20);
    lista.push(idiomas[numidiom])
    }
  return lista
}

function createPeople() {
  let movida = []
  let peopleNumberToCreate = 10
  while (peopleNumberToCreate > 0) {
    let num = Math.floor(Math.random()*20);
    let num2 = Math.floor(Math.random()*20);
    let num3 = Math.floor(Math.random()*20);
    let people = {
      name: nombres[num],
      lastname: apellidos[num2],
      lenguajes: listarandom(),
      address: calles[num3]
    };
    movida.push(people)
    peopleNumberToCreate--;
  };
  return movida;
};

function getPeopleByLanguage(language = null, inputObject = {name}) {
  //Validamos que el idioma no venga vacío
  if(!language)
    {
      console.log('You must define a language girl...');
      return false;
    }
  //Obtener las personas que saben el language especificado
  let people = createPeople();
  let peopleResult = people.filter(function(person) {
    return person.lenguajes == 'Español';
  });
  //Deetructurar objeto para devolverlo con la estructura de inputObject
  return true;
}

//getPeopleByLanguage(exampleObject,'ar')

/* me da pereza terminarlo pero vaya que por ahi va la cosa*/