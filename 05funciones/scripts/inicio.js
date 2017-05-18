


// Declaracion de una funcion
//function sumar () {}

function saludar () {
    let sSaludo = "Hola";
    console.log(sSaludo);
} 

function sumar (a, b) {
    return Number(a) + Number(b);
}

function restar (a, b) {
    return a - b;
}

function multiplicar (a, b) {
    return a * b;
}

function dividir (a, b) {
    return a / b;
}


//function sumarMal () {
//    return nNum1 + nNum2;
//}

function main () {
    let nNum1 = prompt("Dime un nÃºmero", 12);
    let nNum2 = prompt("Dime otro", 23);

    //sumarMal()
    console.log(sumar (nNum1, nNum2));
    console.log(restar (nNum1, nNum2));
    console.log(restar (nNum2, nNum1));
    console.log(multiplicar (nNum1, nNum2));
    console.log(dividir (nNum1, nNum2));


    saludar();
    
}

// InvocaciÃ³n de la funcion
main()