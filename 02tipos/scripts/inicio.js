// JavaScript & EcmaScript ES6

/**
 * Constantes
 */

const SALUDO ='Hola ';
//const SALUDO ='Hello ';

/**
 * Variables y tipos de datos
 */


// Number
var nEdad = 12;
// String
var sCantaor1 = "Pepe 'El Lebrijano'"
var sCantaor2 = 'Juan "El Habichuela"'
// Boolean
var esBueno = true;
var esMalo = false;
// Undefined
var queSoy; 
// Null (Object)
var oDatos = {}

// Object
var oDatos = {
  nombre: "Pepe",
  apellido: "PÃ©rez",
  edad: 23,
  nacionalidad: "Suiza",
  esVaron : true,
  oDireccion : {
    calle: "",
    numero:"",
    poblacion: "",
    cp: "",
    pais: ""
  }
}

console.info("Valores")
console.dir(nEdad);
console.dir(sCantaor1);
console.dir(oDatos);


sCantaor1 = "";
oDatos.oDireccion.calle = "C/ del Pez";

console.info("Tipos")
console.dir(typeof nEdad);
console.dir(typeof sCantaor1);
console.dir(typeof oDatos);
console.dir(typeof esBueno);
console.dir(typeof queSoy);



// OPERADORES + - * / ^ typeof

//Division
var x = 13 / 3;
// MÃ³dulo o resto
var y = 13 ^ 3