/*Ejercicios con operadores lógicos
Exc 1: puedeVerPelicula(edad, tieneAutorizacion)
Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva
true si la persona está habilitada para ver la película o false si no. 
Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

puedeVerPelicula(12, false) // false
puedeVerPelicula(12, true)  // true
puedeVerPelicula(16, false) // true
puedeVerPelicula(18, true)  // true*/

/*let edad = 14
function puedeVerPelicula(edad) {
    if ((edad) >=15) {
        return "True"
    } else if (edad === 15) {
        return "True"
    } else if (edad < 12|| edad === 12) {
        return "False"
    } else if (edad === 12) {
        return "False"
    }
    else {
        return "False"
    }
}
console.log("Primer Persona", puedeVerPelicula(12))
console.log("Primer Persona", puedeVerPelicula(13))
console.log("Segunda Persona", puedeVerPelicula(16))
console.log("Tercera Persona", puedeVerPelicula(18))*/
    
/*Exerc 2 estaEnRango(valor, minimo, maximo)
Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y
devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno 
de los extremos se considera que está dentro del rango)

estaEnRango(3, 1, 10)   // true
estaEnRango(1, 1, 10)   // true
estaEnRango(10, 1, 10)  // true
estaEnRango(12, 1, 10)  // false
estaEnRango(-3, 1, 10)  // false*/

/*let estaEnRango = (a, b, c)*/
/*function estaEnRango (a, b, c) {
        return (a >= 1 && a <= 100) && (b >= 1 && b <= 100) && (c >= 1 && b <= 100);
}
        console.log(estaEnRango(3, 1, 10)); //TRUE
        console.log(estaEnRango(1, 1, 10));  //TRUE
        console.log(estaEnRango(10, 1, 10));  //TRUE
        console.log(estaEnRango(12, 1, 10));  //TRUE
        console.log(estaEnRango(-3, 1, 10));  //FALSE*/

/*Exerc 3: puedeAvanzar(colorSemaforo)
Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y 
devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que 
diga: Error: color de semáforo inválido
        
        puedeAvanzar('verde')     // true
        puedeAvanzar('amarillo')  // false
        puedeAvanzar('rojo')      // false
        puedeAvanzar('lila')      // 'Error: color de semáforo inválido'*/

/*let color = ('verde, rojo, amarillo, lila')*/
/*function puedeAvanzar (verde, amarillo, rojo, lila) {
if (puedeAvanzar === 'verde') {
     return "True"
} else if ((puedeAvanzar === 'rojo') || (puedeAvanzar === 'amarillo')) {
     return "False"
} else if (puedeAvanzar === 'lila') {
     return "Error: color de semáforo inválido"
} else {
     return "False"
}
}

     console.log ("Primer Semaforo", puedeAvanzar('verde'));
     console.log("Segundo Semaforo", puedeAvanzar("amarillo"));
     console.log("Tercer Semaforo", puedeAvanzar('rojo'));
     console.log("Cuarto Semaforo", puedeAvanzar('lila'));*/

/*Exerc 4: esVocal(letra)
Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal 
o false si no lo es.

esVocal('a') // true
esVocal('n') // false*/
/*function esVocal(letra) {
if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        return "True"
    } else if (letra !== ("a, e, i, o, u")) {
        return "False"
    } else {
        return "False"
    }
}

console.log("Primer Letra", esVocal('i'));
console.log("Segunda Letra", esVocal('s'));
console.log("Tercera Letra", esVocal('o'));
console.log("Cuarta Letra", esVocal('p'));*/

/*Exerc 5: esHoraValida(hora)
Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si 
es una hora válida del día o no

esHoraValida('12:23') // true
esHoraValida('12:65') // false
esHoraValida('28:05') // false
esHoraValida('00:00') // true*/

/*function esHoraValida(hora) {
    if ((hora === '12:23') || ( hora <= '13:00') && (hora === '12:23') && (hora >= '23:59')) {
        return "True"
    } else if ("hora <=25:00"){
        return "false"
    }
}
    console.log (esHoraValida('12:23'));
    console.log (esHoraValida('12:65'));
    console.log (esHoraValida('28:05'));
    console.log (esHoraValida('00:00'));*/

/*Exerc 6: puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)
Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos,
pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar 
su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests,
no tiene multas impagas y pagó todos los impuestos

puedeRenovarCarnet(true, true, true)    // false
puedeRenovarCarnet(true, true, false)   // false
puedeRenovarCarnet(true, false, true)   // true
puedeRenovarCarnet(true, false, false)  // false
puedeRenovarCarnet(false, true, true)   // false
puedeRenovarCarnet(false, true, false)  // false
puedeRenovarCarnet(false, false, true)  // false
puedeRenovarCarnet(false, false, false) // false*/

/*function puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos) {
    if (puedeRenovarCarnet === ('true, true, true')) {
        return "False"
    } else if (puedeRenovarCarnet === ('true, true, false')) {
        return "False"
    }  else if (puedeRenovarCarnet !== ("true, false, true")) {
        return "True"
    } else if (puedeRenovarCarnet === ('true, false, false')) {
        return "False"
    }
    else {
        return "False"
    }
}
    console.log(puedeRenovarCarnet ('true,true, true'));
    console.log(puedeRenovarCarnet ('True, false, true'));*/

/*Exerc 7: puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)
Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y 
un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. 
Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

puedeGraduarse(80, 50, true)  // true
puedeGraduarse(80, 50, false) // false
puedeGraduarse(80, 45, true)  // false
puedeGraduarse(80, 45, false) // false
puedeGraduarse(65, 50, true)  // false
puedeGraduarse(33, 55, false) // false
puedeGraduarse(42, 45, true)  // false
puedeGraduarse(28, 45, false) // false*/

/*function puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada) {
if ((puedeGraduarse >= 75) && (puedeGraduarse >= 50 )&& (puedeGraduarse = true)) {
      return "True Puede Graduarse"
    } else if ("puedeGraduarse <= 75, puedeGraduarse <= 50, puedeGraduarse === false") {
        return "False, no Puede Graduarse"
    } else if (puedeGraduarse >= 75, puedeGraduarse >= 50, puedeGraduarse === true) {
        return "False, no Puede Graduarse"
    } else if (puedeGraduarse === 28, puedeGraduarse === 45, puedeGraduarse === false) {
        return "False, no Puede Graduarse"
    }
    else {
        return "Reveer"
    }
}
        console.log("Primer Alumno", puedeGraduarse(80, 50, true))
        console.log("Segundo Alumno", puedeGraduarse(80, 45, false))
        console.log("Tercer Alumno", puedeGraduarse(42, 45, true))
        console.log("Cuarto Alumno", puedeGraduarse(28, 45, false))*/

/*Exerc 8 Ejercicios con condicionales
esParOImpar(numero)
Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar

esParOImpar(3)  // 'impar'
esParOImpar(10) // 'par'*/

/*let numero = prompt ("Introducir Número")
    if(numero % 2 == 0){
          alert("El número " + numero  + " Es Par")
    }else{
          alert("El número " + numero + " Es Impar")
    }*/

/*Exerc 9: esPositivoONegativo(numero)
Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero 
es positivo, o el string negativo si el numero es negativo
    
    esPositivoONegativo(3)  // 'positivo'
    esPositivoONegativo(-5) // 'negativo'*/

/*function esPositivoONegativo (numero) {
    if(numero >= 0) {
        return "Positivo"
    } else if (numero < 0) {
        return "Negativo"
    }
}
    console.log(esPositivoONegativo(3));
    console.log(esPositivoONegativo(-5));*/