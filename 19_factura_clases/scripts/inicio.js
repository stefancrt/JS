// Classes tal como aparecen en ES6

class Cliente {
	constructor (nombre, direccion, telefono, nif) {
		this.nombre = nombre,
		this.direccion = direccion,
		this.telefono =  telefono,
		this.nif = nif
		
	}
}

class Item  {
	constructor (descripcion, cantidad, precio) {
		this.descripcion = descripcion;
		this.cantidad = cantidad;
		this.precio = precio;
	}
}
	

class Factura {
	constructor (iva, formaPago) 
	{
		this.empresa =  {
			nombre: "Ediciones Tuatalug",
			direccion: "c/ Libreros, 23",
			telefono: "900900900",
			nif: "X-25436789"
		}
	
		this.cliente = {}
		this.informacion = {
			baseImponible: 0,
			iva: iva,
			total: 0,
			formaPago: formaPago
		}
		this.elementos = []
	}

	calculaTotal () {
		for (let i = 0; i < this.elementos.length; i++) {
			this.informacion.baseImponible += 
				this.elementos[i].cantidad * this.elementos[i].precio;
		}
		this.informacion.total = 
			this.informacion.baseImponible * this.informacion.iva;
	};
	
	muestraDatos (){
		this.calculaTotal();
        let sHTML = "";
		sHTML += "<p><b>Datos Empresa</b></p>";
		sHTML +="<ul>";
		for (let i in this.empresa) {
		    sHTML +="<li><span class=Cap>" + i + "</span>: " + this.empresa[i] + "</li>";
		}
		sHTML +="</ul>";
		
		sHTML +="<p><b>Datos Cliente</b></p>";
		sHTML +="<ul>";
		for (let i in this.cliente) {
		    sHTML +="<li><span class=Cap>" + i + "</span>: " + this.cliente[i] + "</li>";
		}
		sHTML +="</ul>";
				
		sHTML +="<p><b>Lista de elementos</b></p>";
		sHTML +="<ul class=elementos>";
		sHTML +="<li class=elementos>Descripcion</li>";
		sHTML +="<li class=elementos>Cantidad</li>";
		sHTML +="<li class=elementos>Precio</li>";
		sHTML +="</ul>";
		for(let i=0; i<this.elementos.length; i++){
		    sHTML +="<ul class=elementos>";
		    for (let j in this.elementos[i]) {
		        sHTML +="<li class=elementos>" + this.elementos[i][j] + "</li>";
		    }
			//sHTML +="<li class=elementos>" + this.elementos[i].descripcion+"</li>";
			//sHTML +="<li class=elementos>" + this.elementos[i].cantidad+"</li>";
			//sHTML +="<li class=elementos>" + this.elementos[i].precio+"</li>";
			sHTML +="</ul>";
		};
		sHTML +="<p><b>Total a pagar</b></p>";
		sHTML +="<ul>";
		sHTML +="<li>Importe Total: " + this.informacion.total.toFixed(2)+"</li>";
		sHTML +="<li>Iva: "+ this.informacion.iva+"</li>";
		sHTML +="<li>Pago: "+ this.informacion.formaPago+"</li>";
		sHTML +="</ul>";

	return sHTML;
	};

}

	fact01 = new Factura(1.16, "contado")

	fact01.cliente = new Cliente (
			"Libreria Boracay",
 			"Avda del Rey, 12",
 			"600600600",
 			"X-89763452")

	fact01.elementos =
		[new Item("Libro 1", 12, 14),
		new Item("Libro 2", 10, 20),
		new Item("Libro 3", 15, 34)]


document.querySelector("#btn1").onclick = function () {
  document.querySelector("#factura1").innerHTML = 
          fact01.muestraDatos();
}
