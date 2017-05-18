const prompt = require('prompt');
 
// 
// Start the prompt 
// 
prompt.start();
 
var oDatos = {
	properties : {
		usuario : {
			description : 'Nombre de usuario'
		},
		curso : {
			description : 'Nombre del curso',
			default : 'Desarrollo Web'
		},
		dia : {
			description : "Dia de inicio",
			default : 27
		},
		mes : {
			description : "Mes de inicio (en nÃºmero)",
			default : 4
		}
		//	var nTiempo = 33.5;
	}
}
  // 
  // Get prpopiedades del objeto oDatos
  // 
  prompt.get(oDatos, function (err, result) {
	// 
	// Log the results. 
	// 
	console.log("")
	console.log('Entradas (inputs) recibidas por lÃ­nea de comandos :');
	console.log(`Bienvenido alumno ${result.usuario}`);
	console.log(`del curso "${result.curso}"`);
	console.log(`Comenzaremos el dÃ­a ${result.dia} del mes ${result.mes}` )

	//	'<p>Tiempo transcurrido de curso: <b>' + nTiempo + '%</b> del total.</p>');
  });




