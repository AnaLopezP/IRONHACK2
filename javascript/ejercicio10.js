let alumno1 = {
    name: "Pepe",
    firstProject: 80,
    secondProject: 75,
    finalExam: 90
  };
  let alumno2 = {
    name: "Pepa",
    firstProject: 40,
    secondProject: 30,
    finalExam: 25
  };
  
  const alumnos = [alumno1, alumno2];
  
  let nuevosalumnos = alumnos.map(function(persona){
    let totalproject = 0.2*persona.firstProject + 0.2*persona.secondProject;
    let totalExam = 0.6* persona.finalExam;
    let newObject = {
      name: persona.name,
      notafinal: totalproject+totalExam
    };
    return newObject;
  })
  
  console.log(nuevosalumnos)
  
  const passed = nuevosalumnos.filter(function(alumno) {
    return alumno.notafinal > 50
  })
  
  console.log("Aprobados", passed)