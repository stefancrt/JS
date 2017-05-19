



// Declaracion de una funcion
//function sumar () {}


function sumarObjetos (a, b) {
    a.valor *= 2
    b.valor *= 2
    return a.valor+b.valor;
}

function sumarDobles (a, b) {
    a *= 2
    b *= 2
    return a + b;
}


function main () {
    let oNum1 = {valor : 0}
    let oNum2 = {valor : 0}
    
    oNum1.valor = Number(prompt("Dime un nÃºmero", 12));
    oNum2.valor = Number(prompt("Dime otro", 23));
    
    console.log(oNum1)
    console.log(oNum2)

    //console.log(sumarObjetos (oNum1, oNum2));
    console.log(sumarDobles (oNum1.valor, oNum2.valor));

    console.log(oNum1)
    console.log(oNum2)

}

// InvocaciÃ³n de la funcion
main()

