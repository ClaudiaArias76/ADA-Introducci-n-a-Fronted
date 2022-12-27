/*Sumar (a, b)*/
/*Crear una función Sumar que tome como argumentos dos números y devuelva la suma de ellos*/
/*function sumar (a, b ) {
    return a + b
}
    /*console.log(`${a} + ${b}`)
}*/
/*console.log(sumar (4, 5))*/
/*sumar (2, 3)
----------------------------
/*sumar segunda forma:*/
/*const num1 = prompt("Ingrese su primer num");
const num2 = prompt("Ingrese su segundo num");

function sumar (a,  b) {
    return Number (a) + Number (b)
}
console.log(sumar (a, b))*/
/*------------------------
Tercer ejemplo:*/
/*const num1 = prompt("Ingrese su primer num");
const num2 = prompt("Ingrese su segundo num");

function sumar (a,  b) {
    return `Su suma es ${ Number (a)} + ${Number (b)}`
}
console.log(sumar (num1, num2))*/
/*---------------------------------------------
2° ejerc de suma:*/
/*USANDO Math.FLOOR

function Sumar (a, b) {
   a = Math.floor(1.2)
   b = Math.floor(3.4)
    return `a + b`
}
    console.log(Sumar `a + b`)*/
/*--------------------------------------
    TRABAJANDO OBCIONES PARA PASARLO A DECIMAL
    let numero1 = '1.20';
    let numero = parseInt(numeroComoTexto);
    console.log(numero);*/

/*RESTA */
//(a, b)*/
/*function Resta (a, b) {
    a = 3
    b = 5
    return `a - b`
}*/
    /*console.log("restar a - b")*/

    /*MULTIPLICAR (a, b)*/
    /*function MULTIPLICAR (a, b) {
        a = 4
        b = 0.5
        return `El producto de esta operación ${a} * ${b} es:`
    }*/
/*DIVIDIR (a, b)*/
    /* function DIVIDIR (a, b) {
        a = 8
        b = 4
        return `El resultado de ${a} / ${b} es`
     }*/

/* esPar(numero)
crear una función esPar que tome como argumento un numero y devuelva true si es par o false si no lo es
TIP: un número es impar si divido por 2 el resto (o módulo) de esa operación no es 0*/
/*esImpar(2) // false
esImpar(3) // true*/

/*console.log(3 % 2 == 0)
console.log(6 % 2 === 0)

/*const num1 = prompt("Ingrese su número");
if(num1 % 2 == 0){
    document.write("El número " + num1 + " Es Par");
}else  {
    document.write(`El número ${num1} Es Impar`);
}*/
/*-----------------------------------------------------
gritar(str)
Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación
al principio y al final del mismo*/

/*gritar('hola') // ¡hola!
gritar('aaaaaa') // ¡aaaaaa!*/
/*const gritar = function (gritar) {
                 return("hola")
}
         console.log("¡hola!")
         console.log ("¡aaaaaaaa!")
/*-------------------------------------------------------*/
/*ObtenerNombreCompleto(nombre, apellido)
Crear una función obtenerNombreCompleto que tome como argumento un nombre y un apellido y devuelva un string 
con la unión de ambos valores*/

   /*function obtenerNombreCompleto(Ada, Lovelace) {
                       return(`Mi nombre completo es ${Ada} ${Lovelace}`)
}
            console.log(`obtenerNombreCompleto Ada Lovelace`)

/*obtenerNombreCompleto('Ada', 'Lovelace') //'Ada Lovelace'*/

/*saludar(nombre)

/*Crear una función saludar que tome como argumentos un nombre y devuelva un saludo que lo incluya.

saludar('Ada') // 'Hola Ada, un gusto conocerte'
/*let nombre = "Ada";
function Saludar (nombre) {
   return `${nombre }`
}
           console.log("Hola Ada, un gusto conocerte")*/

/*saludarGritando(nombre, apellido)*/
/*const nombre = prompt("Ingrese su nombre")*/
/*const apellido = prompt ("Ingrese su Apellido")*/
/*function Saludar(nombre, Apellido) {
     alert(`¡¡Holaaa ${nombre}, ${apellido}!!`)
 }*/

/*Saludar (nombre)*/

/*"Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), crear una función saludarGritando */
/*que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.*/

/*saludarGritando('Ada', 'Lovelace') // ¡Hola Ada Lovelace, un gusto conocerte!
TIP: recordá que los resultados de funciones se pueden guardar en variables para usarlos más adelante*/

/*const nombreCompleto = "obtenerNombreCompleto('Ada', 'Lovelace')"
const saludo = saludar(nombreCompleto)
const grito = gritar(saludo)
console.log(grito) // ¡Hola Ada Lovelace, un gusto conocerte!*/

/*function saludarGritando() {
                   return("¡Hola Ada Lovelace!")
 }

 console.log("¡Hola Ada Lovelace!")*/

/*generarEmail(usuario, dominio)

Crear una función generarEmail que tome como argumentos dos string usuario y dominio y el un string email con el 
formato usuario@dominio.com

generarEmail() // 'adalovelace@gmail.com'*/

/*function generarEmail() {
    const usuario = "adalovelace";
    const dominio = "gmail";
    return("Mi email es $(adalovelace) $(@) $(gmail) $(.) $(com)")
}
    console.log("Mi email es adalovelace@gmail.com)")*/
                     
/*esMayorDeEdad(edad)

Crear una función esMayorDeEdad que tome como argumento un número edad y devuelva true si es mayor de edad (18 o más)
o false de lo contrario

esMayorDeEdad(15) // false
esMayorDeEdad(18) // true
esMayorDeEdad(27) // true*/

 /*console.log(15 > 18)
 console.log(18 === 18)
 console.log(27 > 18)*/

/*haceCalor(temperatura)

/*Crear una función haceCalor que tome como argumento un número temperatura y devuelva true si hace calor (22 grados o más) 
o false de lo contrario

haceCalor(12) // false
haceCalor(22) // true
haceCalor(32) // true*/

 /*function haceCalor () {
   
 }
console.log((12===22) || (12 >= 22))
console.log((22===22) || (22 < 22))
console.log( 32 > 22)*/


/*aceptaDeposito(monto)
Crear una función aceptaDeposito que tome como argumento un número monto y devuelva true si el monto es divisible
por 10  o false si no lo es

aceptaDeposito(440) // true
aceptaDeposito(123) // false
aceptaDeposito(500.50) // false
aceptaDeposito(1000) // true*/

/*let aceptaDeposito = function() {
      return ("${440} % 10 === 0")
}
      console.log(440 % 10 === 0)*/
/*let aceptaDeposito = function() {
        return ("${123} % 10 === 0")
}
        console.log(123 % 10 === 0)*/
/*let aceptaDeposito = function() {
    return ("${550.50} % 10 === 0")
}
    console.log(550.50 % 10 === 0)*/
/*let aceptaDeposito = function() {
    return ("${1000} % 10 === 0")
}
    console.log(1000 % 10 === 0)*/