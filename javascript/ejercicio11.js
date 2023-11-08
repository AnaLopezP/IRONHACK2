const personas = [
    {name: "Candance", edad: 25},
    {name: "Tammy", edad: 30},
    {name: "Allen", edad: 20},
    {name: "Nettie", edad: 21},
    {name: "Stuart", edad: 17},
    {name: "Bill", edad: 19},
  ]
  
  let personasBeber = personas.filter(function(persona) {
    return persona.edad > 20;
  })
  
  console.log(personasBeber)