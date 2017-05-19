


function sumar(){
    let x=prompt("primer numero")
    let y=prompt('segundo numero')
    return +x + +y;
}
function restar(){
    let x=prompt("primer numero")
    let y=prompt('segundo numero')
    return x-y;} 
function multiplicar(){
    let x=prompt("primer numero")
    let y=prompt('segundo numero')
    return x*y;}
function dividir(){
    let x=prompt("primer numero")
    let y=prompt('segundo numero')
    return x/y;}    
function main () {

   function calCul(a=0) {
    
        if (a=='s') {
            return sumar()
        } else if (a == 'r') {
            return restar()
        } else if (a== 'm'){
            return multiplicar()            
        } else if (a== 'd'){
            return dividir()            
        }
    }
    
    let operValor =prompt("Operacion (s =sumar, r =restar, m =multiplicar, d =dividir)");
    
    let sRespuesta = calCul(operValor);
   
    console.log(sRespuesta);
}
    
   


main()
