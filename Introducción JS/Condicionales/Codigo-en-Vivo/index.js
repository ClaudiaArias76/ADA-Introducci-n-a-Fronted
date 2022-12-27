/*let color = "Rojo"*/

/*if (color === "Rojo") {
console.log("Si, el color es Rojo")
}
let edad = 35;
if (edad > 18) {
    console.log("Puede pasar")
} else {
    console.log("No, no puedes pasar, eres Menor de Edad")
}*/
//Condicional else if:
/*let edad = 17;
if (edad > 18) {
    console.log("Puede pasar")
} else if (edad === 18){
    console.log("Tienes 18, puedes pasar")
}else if (edad <= 0){
    console.log("No, eres humano")
} else if (edad === 17) {
    console.log("Puedes pasar con autorización de tus padres")
}
else {
    console.log("No, no puedes pasar, eres menor de edad")
}*/

//A continuación un ejemplo de ESTRUCTURA DE CONTROL: que comportamiento va a tener mi JS //
/*DOBLE CONDICION DONDE USAMOS LOS OPERADORES BOOLEANOS: || &&*/
/*let edad = 17;*/
/*if (edad > 18 && edad < 40) {
    console.log("Puede pasar")
} else if (edad === 18){
    console.log("Tienes 18, puedes pasar")
}else if (edad <= 0){
    console.log("No, eres humano")
} else if (edad === 17 || edad === 16) {
    console.log("Puedes pasar con autorización de tus padres")
}
else {
    console.log("No, no puedes pasar, eres menor de edad")
}*/
   
  /* function controlBaile(edad) {
    if (edad > 18 && edad < 40) {
        return "Puede pasar"
    } else if (edad === 18) {
        return "Tienes 18, puedes pasar"
    } else if (edad <= 0) {
        return "No, eres humano"
    } else if (edad === 17 || edad === 16) {
        return "Puedes pasar con autorización de tus padres"
    }
    else {
        return "No, no puedes pasar, eres menor de edad"
    }
   }
    console.log("Primer Persona", controlBaile(25))
    console.log("Segunda Persona", controlBaile(16))
    console.log("Tercer Persona", controlBaile(45))
    console.log("Cuarta Persona", controlBaile(-5))
// DOS CONDICIONES BOOLEANAS PODRIAN SER:
// edad = 56
function controlBaile(edad) {
    if ((edad > 18 && edad < 40)|| edad >=55) {
     // (   si      y      no)   o   si
     //         FALSE            o   TRUE
     //     se CUMPLE LA CONDICION del if   
        return "Puede pasar"
    } else if (edad === 18) {
        return "Tienes 18, puedes pasar"
    } else if (edad <= 0) {
        return "No, eres humano"
    } else if (edad === 17 || edad === 16) {
        return "Puedes pasar con autorización de tus padres"
    }
    else {
        return "No, no puedes pasar, eres menor de edad"
    }

}*/
//Métodos de String y Number:
/*let saludo = "Hola, soy Giordano"
console.log(saludo.length)*/
//Replace:
/*let saludo = "Hola, soy Giordano"
//console.log(saludo.replace("Hola", "Chau"))
//Mayúsculas a Minusculas:
/*console.log(saludo.toLowerCase())*/
//METODOS NUMBER:
/*let num1 = 10.77
/*console.log(num1.toString())
console.log(parseInt(num1)) //leva a entero*/
/*console.log(Math.floor(num1)) //redondea hacia abajo
/*console.log(Math.round(num1))  //redondea hacia arriba
/*console.log(Number.isInteger(num1)) //se pregunta si es entero*/
