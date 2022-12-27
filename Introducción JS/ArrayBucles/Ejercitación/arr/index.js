/*Ejercicios
Todo ejercicio que incluya emojis puede ser sustituido con strings*/

/*obtenerMenor(numeros)
Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:

obtenerNumeroMenor([5, 7, 99, 34, 54, 2, 12]) // 2

/*FORMA 1*/
/*let esMenor = 99
function obtenerMenor (arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < esMenor) {
            esMenor = arr[i]
        }
    }
    return esMenor
}
console.log(obtenerMenor([5, 7, 99, 34, 54, 2, 12]))*/
// FORMA 2
/*function obtenerMenor (arr) {
    let aux = arr[0]
    for (i = 1; i < arr.longitud; i++) {
        if(arr[i] < aux) {
            i = arr[yo]
        }
    }
    return aux
}
console.log(obtenerMenor([5, 7, 99, 34, 54, 2, 12]))*/

/*Ex2: sumar(numeros)
Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:

sumarNumeros([5, 7, 10, 12, 24]) // 58*/

/*let total = 0, numeros = [5, 7, 10, 12, 24];
for(let i of numeros) total+=i;
console.log(total);*/

/*Ex 3: contiene(numero, numeros)
Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:

contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false*/

/*Primero deberias crear una funcion con el nombre contiene
recibe dos parametros el array y el valor a buscar */
/*let contiene = [5, 7, 99, 3, 4, 54, 2, 12];

if (contiene.indexOf(54) > -1) {
    console.log('True');
  } else {
    console.log('False');
  }*/

/*2° ejemplo:*/
/*let contiene = [5, 7, 99, 3, 4, 54, 2, 12];

if (contiene.indexOf(103) > -1) {
    console.log('True');
  } else {
    console.log('False');
  }*/

/*Ex4: invertirCaso(string)
Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el 
caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

invertirCaso('Ada Lovelace') // 'aDA lOVELACE'
invertirCaso('feliz cumple') // 'FELIZ CUMPLE'
invertirCaso('jAvAsCrIpT') // 'JaVaScRiPt'*/

/*let invertirCaso = "aDA lOVELACE";
let mayusculas = invertirCaso.toUpperCase();
console.log("En mayúsculas es: ", mayusculas);*/
  

/*let invertirCaso = "aDA lOVELACE";
let minusculas = invertirCaso.toLowerCase();
console.log("En minúsculas es: ", minusculas);*/

/*Tercer Forma: 

let nombre = "aDA lOVELACE"

let primeraLetra = (nombre[0].toUpperCase() + nombre[4].toUpperCase());

console.log(primeraLetra);*/
// devuelve la letra 'A' en este caso
  
//Cuarta Forma:

/*invertirCaso('Ada Lovelace') // 'aDA lOVELACE'
invertirCaso('feliz cumple') // 'FELIZ CUMPLE'
invertirCaso('jAvAsCrIpT') // 'JaVaScRiPt'*/

/*let nombre = 'aDA lOVELACE';

function invertirCaso(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}*/

//const arr = ['aDA lOVELACE'];

/*const nombre = arr.map(element => {
  return element.toUpperCase();
});

console.log(nombre);*/
/* 👇️ ['APPLE', 'BANANA', 'CEREAL']*/

/*let nombre = 'aDA lOVELACE';
let primeraLetra = nombre[0].toUpperCase();

console.log(primeraLetra);
let restoNombre = nombre.slice(1);

console.log(restoNombre)

let nuevoNombre = primeraLetra + restoNombre;

console.log(nuevoNombre);

function invertirCaso() {
    return nuevoNombre[0].toUpperCase() + nuevoNombre.slice(1);
}

console.log(nuevoNombre);*/
/*let nombre = 'aDA';
let primerLetra = 'a';
let restoNombre = 'DA'
let apellido = 'lOVELACE';
let primeraApellido = 'l';
let restoApellido = 'OVELACE'
    console.log((primerLetra.replace("a", "A")) + (restoNombre.toLowerCase(1)) + (" ") + (primeraApellido.replace("l", "L")) + (restoApellido.toLowerCase(1)));
*/
/*invertirCaso('feliz cumple') // 'FELIZ CUMPLE'*/

/*let invertirCaso = 'feliz cumple';
console.log(invertirCaso.toUpperCase())*/

/*let palabra = 'jAvAsCrIpT';        // 'JaVaScRiPt'
let letrasMayus = 'a, c, i, t';
let letrasMinus = 'j, v, s, r,p';


console.log(letrasMinus.toLowerCase())
console.log(letrasMayus.toUpperCase())

console.log(concat(letrasMayus + letrasMinus))*/

/*Exec 5: estanJuntos(personajes)
Crear una función estanJuntos que tome como argumento un array de strings personajes, y devuelva true 
si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:

estanJuntos(['Sam', 'Frodo', 'Legolas']) //true
estanJuntos(['Aragorn', 'Frodo', 'Frodo']) //true
estanJuntos(['Sam', 'Orco', 'Frodo']) //true*/

/*function estanJuntos(['Sam', 'Frodo', 'Legolas'])*/

/*let mensaje = (personajes === ('Sam', 'Frodo')) ? 'El personaje es Sam, Frodo' : 'El personaje no es Sam, Frodo';
console.log(mensaje);*/

// Primero: declaramos la variable numero y le asignamos el valor 0
// Segundo: escribimos la condición que queremos validar
// Terceo: incrementamos el valor de la variable numero en 1

/*let personajes = ['Sam', 'Frodo', 'Legolas'];
/*if (personajes.indexOf('Sam', 'Frodo') > -1) {
  console.log('Es True');
} else {
    console.log('Es false');
}*/
/*let estanJuntos = (['Aragorn', 'Frodo', 'Frodo']);
/*if (estanJuntos.indexOf('Sam', 'Frodo') > -1) {
    console.log('Es True');
  } else {
      console.log('Es false');
  }*/

/*let estanJuntos = (['Sam', 'Orco', 'Frodo'])
if (estanJuntos.indexOf('Sam', 'Frodo') > -1) {
    console.log('Es True');
  } else {
      console.log('Es false');
  }*/
/*Ex 6: germinar(plantines)
Crear una función germinar que tome como argumento un string de plantines con flores y plantines (🌱). 
El array debe comenzar con una flor. La función debe devolver un string con los plantines convertidos en flores. 
El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:*/

/*let cadena = "B a C a D a B a C a D a";
let cadenaRemplazada = cadena.replace(/a/g, "o");
console.log(`Cadena: ${cadena}. 
Cadena remplazada: ${cadenaRemplazada}`);*/

/*Exerc7: multiplicar(multiplicador, numeros)
Crear una función multiplicar que tome como argumentos un número multiplicador y un array de números numeros,
y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) 
multiplicado por el número ingresado. Ejemplo:*/

/*multiplicar(2, [5, 7, 15, 22, 40]) // [10, 14, 30, 44, 80]
/*multiplicar(10, [2, 5, 77]) // [20, 50, 770]*/
const números = ([5, 7, 15, 22, 40]);
const resultado = números * 2;
console.log(resultado)
  
