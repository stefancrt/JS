let oSample1 = {};
let oSample2 = new Object();

console.log(typeof oSample1)
console.log(typeof oSample2)

console.log(oSample1)
console.log(oSample2)

oSample1.nombre = "";
oSample2.titulo = "";

oSample2.oLibro = {};
oSample2.oLibro.titulo = "";

console.log(oSample1)
console.log(oSample2)


let aSample = [];
let aSample2 = new Array()


oFlight = {
	airline: "Oceanic",
	number: "815",
	departure : {
		claveIATA : "SYD",
		time : new Date(2004,09,22,14,55),
		ciudad: "Sydney"
	},
	arrival : {
		claveIATA: "LAX",
		time: new Date(2004,09,23,10,42),
		ciudad: "Los Angeles"
	},
	mostrar : () => {
		console.log(oFlight);
	}
}

oFlight.mostrar()