//una funcion que calcula donde cae un misil que pasa por los siguientes paises de la lista
const paises = ['Omán','Israel', 'Grecia', 'Italia','España','Portugal','O. Atlántico','O. Atlántico','O. Atlántico','O. Atlántico','O. Atlántico','O. Atlántico','Caribe','Panamá', 'México','O. Pacífico','O. Pacífico','O. Pacífico','O. Pacífico','O. Pacífico'];

let combustible  = 10
let pasos = 100/paises.length
let distancia = combustible * pasos
let avance = 0

//la funcion peta pero no se por que. Si quito la funcion y en vez de poner return pongo break si funciona.
function calc(){
  for (let i = 0; i < paises.length; i++) {
    if (avance < distancia) {
      console.log(`Seguimos sin incidentes, pasamos por ${paises[i]}`);
    }
    else {
      console.log(`Explota ${paises[i]}`);
      return (paises[i]);
      }
    avance = avance + pasos;
  }
}