/*Saludo*/
/*const nombre = prompt("Indique su Nombre")                           //con el prompt estoy  gruardando la variable//
const apellido = prompt("Indique su Apellido")
alert(`Hola ${nombre } ${apellido}, bienvenida a Ada`)
function Saludo () {
    return ("${nombre} ${apellido } , bienvenido a Ada")
}
   console.log("${nombre} ${apellido } , bienvenido a Ada")

/*Heladería
Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje 
que diga, por ejemplo, "Aquí tiene su helado de chocolate, dulce de leche y menta granizada".*/

/*let sabor1=prompt("digame su primer sabor");
let sabor2=prompt("digame su segundo sabor");
let sabor3=prompt("digame su tercer sabor");
let mensaje="Aquí tiene su helado de = sabor1 + sabor2 + sabor3";
alert("Aqui tiene su helado de: " + sabor1);
alert("Aqui tiene su helado de: " + sabor2);
alert("Aqui tiene su helado de: y " + sabor3);

document.write("Bienvenido/a a la heladeria virtual, " + "sabor1" + "sabor2" + "sabor3")

/*Dirección completa
Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código
postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".*/
/*const calle = prompt("Indique su Calle")
const numero = prompt("Indique Número")
const departamento = prompt("Indique Departamento")
const CodigoPostal = prompt("Indique Código Postal")
const ciudad = prompt("Indique Ciudad")
const pais = prompt("Indique país")
alert(`La dirección que ha ingresado es: ${calle } ${numero } ${departamento} ${CodigoPostal } ${ciudad } ${pais }`)*/

/*Años perro
Crear un programa que pida ingresar una edad y devuelva el equivalente de esa edad en años perros*/
/*const edad = prompt("Indique su edad")
const edadPerruna = edad * 4
alert (`Su edad en años perros es ${edadPerruna}`)*/

/*Área de un triangulo
Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.*/
/*const ValorBase = prompt("Indique valor de la base")
const ValorAltura = prompt("Indique valor de Altura")
const resultado = ValorBase * ValorAltura / 2;
alert(`El área del triángulo es: ${resultado }`)*/

/*Perímetro de un rectángulo
Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho de un rectángulo,
calcular su perímetro y mostrarlo en un mensaje.*/

/*const Valor1 = prompt("indique valor de la altura del rectángulo")
const Valor2 = prompt("indique valor de la altura del rectángulo")
const Valor3 = prompt("indique valor de ancho del rectángulo")
const Valor4 = prompt("indique valor de ancho del rectángulo")
const resultado = ((Valor1 + Valor2) * (+ Valor3 + Valor4))
alert(`El perímetro de un rectángulo es: ${resultado}`)*/


/*Porcentaje
Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. 
Devolver un mensaje muestre el porcentaje de dicho número.*/

/*const Porcen = prompt("ingrese un número")

const resultado = ((Porcen * 12) / (100))
alert(`El porcentaje es: ${resultado}`)*/
     
/*Duración vuelo
Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.*/

/*Incremento
Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes 
seguidos que muestren el número del mensaje y el total incrementado hasta el momento 
(p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", 
"Incremento 3) Total: 20", etc.).*/

/*let num1 = 2;
let num2 = 5;
let resultado1 = ++num1 * num2;
let resultado2 = num1++ * num2;
console.log(resultado)

/*Celsius a Fahrenheit
Crear un programa que pida ingresar una cantidad de grados Celsius y muestre un mensaje con el resultado de la conversión
a grados Fahrenheit.*/

/*const Centi = prompt ("Ingrese centígrados");
const Faren = ((9 / 5 * Centi) + 32);
alert(`${Centi} "equivale a", ${Faren}, "grados farenheit"`)*/

/*Múltiplos
Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje si el primer valor es múltiplo del 
segundo. INVESTIGAR EL OPERADOR MÓDULO O DE RESTO % PARA HACERLO*/

/*const a = prompt ("Ingrese un número");
const b = prompt ("Ingrese un número");
const c = ((a % b) == 0);

alert(`${a} "y" ${b} "es" ${c} "False cuando su resto no es igual a cero y True si es igual a cero`)*/

/*Cantidad de caracteres
Crear un programa que pida al usuario ingresar un texto y muestre un mensaje con la cantidad de caracteres 
que tiene ese texto. INVESTIGAR CÓMO HACERLO*/

/*var x = 'Mozilla';
var empty = '';

console.log('Mozilla is ' + x.length + ' code units long');
/* "Mozilla is 7 code units long" */
/*console.log('The empty string has a length of ' + empty.length);*/
/* "The empty string has a length of 0" */

/*Orden de compras
Crear un programa que tome la orden de compra de un local. Pedir al usuario que ingrese la cantidad que desea comprar
de tres productos distintos, uno por uno, mostrar el valor total de la compra y preguntar en cuántas cuotas desea realizar
el pago. Mostrar un mensaje final con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una
de las cuotas.
Los precios de los productos deben estar definidos de antemano en variables.*/

/*const verd1 = prompt ("Ingrese cuánto desea") 
const verd2 = prompt ("Ingrese cuánto desea");
const carne = prompt ("Ingrese cuánto desea");
const list = verd1 + verd2 + carne;
alert(`"El total comprado es "${list}`); 
const pago = prompt ("Ingrese cantidad de cuotas a abonar");
const total = list / pago
alert(`"Usted debe abonar " ${list} / "en " ${pago} "cuotas", "Por lo tanto su compra de verd1, verd2 y carne es igual a " ${pago} "cuotas", "cada uno de " ${total}`)*/
