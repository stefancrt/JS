

calculadora = {
    oDatox : {
		num1 : {
			valor : 25, 
			msg : "Escribe un nÃºmero"
		},		 
    	num2 : {
			valor : 25, 
			msg : "Escribe otro nÃºmero"
		}
	},
	sOperacion : {
		valor : "S",
		msg : "Selecciona <S>uma, <R>esta, <P>roducto o <D>ivision",
	} ,
	sRespuesta :{
		valor : "" ,
		aMsg : [
			"OperaciÃ³n no soportada",
			"El resultado es "
		]
	},
	sumar :  (a, b) => {
    	return Number(a) + Number(b);
	}, 
	restar : (a, b) => {
    	return a - b;
	}, 
	multiplicar : (a, b) => {
		return a * b;
	},
	dividir : (a, b) => {
		return a / b;
	},
	calcular : function (pNum1, pNum2, pOp) {

		let result = 0;
		switch (pOp) {
			case "S":
			case "s":
				// Suma
				result = this.sumar(pNum1, pNum2)
				break;
			case "R":
				// Resta
				result = this.restar(pNum1, pNum2)
				break;
			case "*":
			case "P":
			case "p":
			case "M":
			case "m":			
				// Multiplicacion
				result = this.multiplicar(pNum1, pNum2)
				break;
			case "D":
				// DivisiÃ³n
				result = this.dividir(pNum1, pNum2)
				break;		
			default:
				// InstrucciÃ³n no soportada
				result = NaN
				break;
		}
		return result;
    }, // Fin de la funciÃ³n calcular

	mostrarDatos : function () {
		if (isNaN(this.sRespuesta.valor)){
			console.log(this.sRespuesta.aMsg[0]);	
		} else {
			console.log(this.sRespuesta.aMsg[1]+ this.sRespuesta.valor);	
		}
	}, 
	pedirDatos : function () {


		this.oDatox.num1.valor = prompt(this.oDatox.num1.msg, 
										this.oDatox.num1.valor)
		this.oDatox.num2.valor = prompt(this.oDatox.num2.msg,
										this.oDatox.num2.valor)
		this.sOperacion.valor = prompt( this.sOperacion.msg,
										this.sOperacion.valor)
		this.sRespuesta.valor = this.calcular (
			this.oDatox.num1.valor, 
			this.oDatox.num2.valor, 
			this.sOperacion.valor);
		this.mostrarDatos();

	}
}


console.dir(calculadora)
calculadora.pedirDatos();
