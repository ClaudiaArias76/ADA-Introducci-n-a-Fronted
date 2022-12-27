switch
let edad = 18    //Aqui me oregunta si edad es un entero
switch (Number.isInteger(edad)) {
    case edad == 18:
        console.log("Tienes 18, puedes pasar")
    break;
    case edad <= 0:
        connsole.log("Disculpa, no puedes ser humano")
    break;
    default:
        console.log("default")
    break;
}
let edad = 12
switch (Number.isInteger(edad)) {
    case edad > 18 && edad >=40 || edad >= 55 :
        console.log("Puedes pasar")
        case edad == 18:
        console.log("Tienes 18, puedes pasar")
    break;
    case edad <= 0:
        connsole.log("Disculpa, no puedes ser humano")
    break;
    case edad === 17 || edad === 16:
        console.log("Puedes pasar con autorización de tus padres")
    default:
        console.log("No, No puedes pasar, eres menor de edad")
    break;
}
OPERADOR TERNARIO
const edad = 20
condición ? En el caso de True : en el caso de false
edad >= 18 ? console.log("Tienes más de 18") : console.log("Eres menor de 18");*/

/*if(edad >= 18) {
    console.log("Tienes más de 18")
}else {
    console.log("Eres menor de 18")
}*/
/*const datosUsuario = ["email@gmail.com", 123456, "Ada", "Lovelace", "tanto tanto al 1500", true];*/
/*const nombres = [ "Angel", "Clau", "Carla", "Sofi", "Luna", "Teresa", "Martin", "Elio"];*/
/*                  0  ,     1 ,     2   */
/*console.log(nombres [1]);*/
// LENGTH
/*console.log(nombres.length)*/
/*console.log(nombres[nombres.length - 2])*/
/*console.log(nombres[(nombres.length / 2) - 1])*/
//METODOS ARRAY
//.push
/*nombres.push("Ada");
console.log(nombres)*/
// .pop
/*nombres.pop()
console.log(nombres)*/

/*let datosDeUsuario =[];
let nombre = prompt ("Ingrese su nombre")
datosDeUsuario.push(nombre)
let dirección = prompt ("Ingrese su dirección")
datosDeUsuario.push(dirección)*/
/*.shift()   //quita el primer elemento de mi array*/
/*const nombres = [ "Angel", "Clau", "Carla", "Sofi", "Luna", "Teresa", "Martin", "Elio"];
nombres.shift()
console.log(nombres);*/
//unshift
/*const nombres = [ "Angel", "Clau", "Carla", "Sofi", "Luna", "Teresa", "Martin", "Elio"];
nombres.unshift()
console.log(nombres);*/
/*const nombres = [ "Angel", "Clau", "Carla"];*/
/*console.log(nombres.indexOf("Carla"));*/
/*console.log(nombres.indexOf("Car"));*/
/*if(nombres.indexOf("Car") === -1) {
    console.log("No existe ese string en el array")
}else{
    console.log("Sí, si existe")
}*/
// Otra manera podría ser:
/*if(nombres.indexOf("Car") !== -1) {
    console.log("Sí, si existe")
}else{
    console.log("No, no existe")
}*/
//.includes()

/*if(nombres.includes("Carla")) {
    console.log("Sí, si existe")
}else{
    console.log("No, no existe")
}*/
//FOR
/*for (inicio; condición; modificador) {
}*/
/*for (let index = 1; index <= 5; index = index + 1) {
    console.log(index)
}*/
//En  primer lugar se guarda la variable index (sólo lo hace una vez)
// la condición se va a evaluar cada vez que quiera repetiro ejecutar el código
//Antes de ejecutar el código en {} evalua la condic para evaluar si es true
//al terminar de ejecutar el código entre {} ejecuta el modificador
/*for (let index = 0; index < nombres.length; index ++) {
    console.log(nombres[index])
}*/
/*Otra manera podria ser:*/
/*const nombres = [ "Angel", "Clau", "Carla", "Clau", "Martin", "Clau"];
for (let index = 0; index < nombres.length; index ++) {
    if(nombres[index] === "Clau") {
        console.log(nombres[index])
    }
}*/
/*const nombres = [ "Angel", "Clau", "Carla", "Clau", "Martin", "Clau"];*/

/*const nombre = "Ada Lovelace"
for (let index = 0; index < nombre.length; index ++) {
    console.log(nombre[index])
}*/
/*Otra manera de trabajar con string = array:*/
/*const nombre = "Ada Lovelace"
for (let index = 0; index < nombre.length; index ++) {
    if(nombre[index] === "v") {
        console.log(true)
    }
    /*console.log(nombre[index])
}*/
//LO MAS COMUN ES ESTO:
/*y reemplazan por ej indez x sólo i
const nombre = "Ada Lovelace"
for (let i = 0; i < nombres.length; i ++) {
    if(nombres[i] === "Clau") {
        console.log(nombres[i])
    }
}*/
/*ó al revés:*/
//En un mismo array pueden haber muchos más array, y eso se soluciona con el ANIDAMIENTO DE FOR  
// pero no es lo más común
/*const nombres = [ "Angel", [20, 50, 90, [true, 2]],"Clau", "Carla", "Martin"];
for (let i = 0; i < nombres[i].length; i ++) {
       for(let i = 0; i < nombres[i].length; i++) {

       }
}*/
//while:
/*let nombres = [ "Angel", "Clau", "Carla", "Clau", "Martin", "Clau"];
let index = 0
while (index < nombres.length){
     console.log(nombres[index])
     index++
}*/

//Los array no son iguales por ser disstintos espacios de memoria
/*console.log([] == [])
console.log([] == true)
console.log(["Hola"] == true)
console.log(["Hola"] === true)*/