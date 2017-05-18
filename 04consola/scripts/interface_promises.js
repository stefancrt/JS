const readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function pedirDatosAsync (rl, sQuestion) {
  return new Promise((resolve) => {
    rl.question(sQuestion, (data) => {
		return resolve(data) })
    })
}	

const pedirDatos = (rl) => {
	let cUsuario, cCurso, nDia, nMes, nTiempo = 180;

	cUsuario = pedirDatosAsync(rl, 'Nombre de usuario ') 
	.then(
		cCurso = pedirDatosAsync(rl, 'Nombre del curso ')
	)
	. then (
		nDia = pedirDatosAsync(rl, 'Dia de inicio ')
	)
	. then (
		nMes = pedirDatosAsync(rl, 'Mes de inicio (en nÃºmero)')
	)
	.then (() => {
		mostrarResultado (cUsuario, cCurso, nDia, nMes, nTiempo);
		rl.close();
	})	
}

const mostrarResultado = (pUsuario, pCurso, pDia, pMes, pTiempo) => {
	console.log('')
	console.log(`Hola ${pUsuario}`);
	console.log(`Bienvenido al curso: ${pCurso}`);
	console.log(`Que empieza el dÃ­a ${pDia} del mes ${pMes}`);
	console.log(`con una duraciÃ³n de ${pTiempo} horas`)
}

pedirDatos(rl);