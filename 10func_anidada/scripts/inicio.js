

(function main () {
    let nNum1 = 0;
    let nNum2 = 0;

    let sumar =  (a,b) => {
        return +a + +b;
    }
    let restar = (a,b) => {
        return a-b;
    }
    let sumarDobles = (a, b) => {
        a *= 2;
        b *= 2;
        return a + b;
    }

    nNum1 = Number(prompt("Dime un nÃºmero", 12));
    nNum2 = Number(prompt("Dime otro", 23));
    
    let nResultSumaDobles = sumarDobles (nNum1, nNum2);
    let nResultSuma = sumar (nNum1, nNum2);
    let nResultResta = restar (nNum1, nNum2);
    
    console.log(nResultSuma);
    console.log(nResultResta);
    console.log(nResultSumaDobles);
})(); //se ejecuta sola al arancar  (function main)()
