const unicoDiv = document.querySelector("#primerDiv")
//Ej de cómo funciona promesas:
/*console.log(1)

setTimeout(() => {      // Es una función que recibe 2 parámetros: el primero es una función callback a ejecutar y la segunda el tiempo
    console.log(2)         //que hay que esperar para q se ejecute
}, 5000);

console.log(3)
console.log("estoy linkkeada")*/

/*fetch("https://pokeapi.co/api/v2/pokemon")   //ingreso la pág donde está la información a la que quiero acceder como string
      .then(response => response.json())                     //cuando se cumpla promesa ingresará en el pto then.
//(voy a mi html para verificar)
      .then(data  => {
            console.log(data.results)
            for (let index = 0; index < data.results.length; index++) {
            unicoDiv.innerHTML += '<h5>${data.results[index].name}</h5>'
      }
})
      .catch(error => console.log(error)) */            //es el que va a entrar si en algun momento hay un error
      /*.finally(console.log ("Terminé"))*/
      /*const element = array[index];*/

//Estados de las Promesas:
// Estado Cumplido
// Estado en que falló
// Estado de finalización

fetch("https://pokeapi.co/api/v2/pokemon/1/")   //ingreso la pág donde está la información a la que quiero acceder como string
      .then(response => response.json())                     //cuando se cumpla promesa ingresará en el pto then.
//(voy a mi html para verificar)
      .then(data  => {
      console.log(data)
      unicoDiv.innerHTML = `
          <h2> ${data.name}</h2>
          <p>${data.base_experience}</p>
          <img src=${data.sprite.other.home.front_default}>
`
})
      .catch(error => console.log(error))


console.log("Abajo de la Promesa")
function app(){
      const unicoDiv = document.querySelector("#primerDiv")

      fetch("https://pokeapi.co/api/v2/pokemon/1/")   
      .then(response => response.json())
      .then(data  => {
            console.log(data)
            unicoDiv.innerHTML = `
                <h2> ${data.name}</h2>
                <p>${data.base_experience}</p>
                <img src=${data.sprites.other.home.front_default}>
`
})
      .catch(error => console.log(error)) 
}

window.onload = app()