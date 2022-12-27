/*const list = [1, 15, 3, 87, 45, 99, 38, 73]
//Filter
const arrFiltrado = list.filter (function (num) {
    return num > 30  //El filter en la función tiene que dar true o false
})
// ------------> 1 > 50 ------> False Entonces no me guarda este número en el nuevo arr
 console.log(arrFiltrado)*/

/*const list = [1, 15, 3, 87, 45, 99, 38, 73]
const arrFiltradoConFlecha = list.filter(num => num > 30 ) 
console.log(arrFiltrado)*/

//MAP:
/*const list = [1, 15, 3, 87, 45, 99, 38, 73]
const arrayMapeado = list.map(function (num) {
    return num + 20
})
console.log(arrayMapeado)*/
/*const nombres = ["Ada","Angel", "clau", "Carla"]
/*const saludarATodos = nombres.map(cadaNombre => "Hola " + cadaNombre)
console.log(saludarATodos)
console.log(nombres)*/
/*const list = [1, 15, 3, 87, 45, 99, 38, 73]
const listaOrdenada = list.sort()
console.log(listaOrdenada)
console.log(list)*/

//Para ordenarlos bien, puedo:
/*const list = [1, 15, 3, 87, 45, 99, 38, 73]
const listaOrdenada = list.sort(function(a,b) {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
    return 0;
})
console.log(listaOrdenada)
console.log(list)*/
//Objetos:
/*const persona = {
    nombre: "Ada",
    apellido: "Lovelace",
    edad : 46,
    profesión: ["Programadora", "Matemática"],
    vive: false,
    //propiedad : valor
    saludar: function () {
        return "Hola, soy " + persona.nombre + (" ") + persona.apellido
    }
}*/
     /*console.log (persona.saludar())*/
/*const persona2 = {
    nombre: "Claudia",
    apellido: "Arias",
    edad : 46,
    domicilio: "Godoy Cruz",
    profesión: ["Lic Comunicación Social"],
    vive: true,
    saludar: function () {
        return "Hola, soy " + persona2.nombre + (" ") + persona2.apellido
    }
}*/
/*console.log (persona.saludar())*/
/*console.log (persona2.saludar())*/

/*const pokemon = {
    nombre: "Pikachu"
}
/*console.log (pokemon.nombre)*/

//Cómo le agrego propiedades a un objeto
/*pokemon.ataque = 72
/*console.log(pokemon.ataque)*/
/*for (const key in pokemon) {
console.log(pokemon[key])
console.log(key)
console.log(key, pokemon[key])
}*/
const personas = [
  {
    nombre: "Ada",
    apellido: "Lovelace",
    edad : 46,
    profesión: ["Programadora", "Matemática"],
    vive: false,
  },
  {
    nombre: "Claudia",
    apellido: "Arias",
    edad : 46,
    domicilio: "Godoy Cruz",
    profesión: ["Lic Comunicación Social"],
    vive: true,
},
{
    nombre: "Angel",
    apellido: "Montaña",
    edad : 30,
    domicilio: "San Juan",
    profesión: ["programador"],
    vive: true,
}
]
/*console.log(personas[2].nombre)
console.log(personas[2].profesión[0])
//si necesito guardar profesion porque la voy a usar más adelante, lo guardo en variable como por ej:
let profesiónClaudia = personas[2].profesión[0]
console.log(profesiónClaudia)
//Si quiero montrar extensión:
console.log(profesiónClaudia.lenght)*/
/*const personasJSON = JSON.stringify(personas)
console.log(personasJSON)*/
const personasJS = JSON.parse(personasJS)
console.log(personasJS)