const cities =  ["miami", "barcelona", "madrid", "amsterdam", "berlin", "lisboa", "paris"]

//devuelve un array porque el map se usa para las arrays. Estamos igualando una variable a una lista, pues devuelve una lista.
let letraCiudad = cities.map(function(city) {
  let letra = city[0].toUpperCase();
  return letra
})

console.log(letraCiudad)