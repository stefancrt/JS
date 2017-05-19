
// Declaracion de una funcion como variable
// let n_var = "valor variable"
let sumar = function (a,b) {return +a + +b}

// DeclaraciÃ³n de una funciÃ³m arrow (ES6)

let restar = (a,b) => {return a-b}

// Declaracion de una funcion
function sumarDobles (a, b) {
    a *= 2
    b *= 2
    return a + b;
}

function main () {
    let nNum1 = 0
    let nNum2 = 0
    
    nNum1 = Number(prompt("Dime un nÃºmero", 12));
    nNum2 = Number(prompt("Dime otro", 23));
    
    let nResultSumaDobles = sumarDobles (nNum1, nNum2)
    let nResultSuma = sumar (nNum1, nNum2)
    let nResultResta = restar (nNum1, nNum2)
    
    console.log(nResultSuma);
    console.log(nResultResta);
    console.log(nResultSumaDobles);


}


// InvocaciÃ³n de la funcion
main()
