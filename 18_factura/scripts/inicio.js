
// Estructura bÃ¡sica del objeto Factura
	let factura = {
		empresa: {
			nombre: "Ediciones Tuatalug",
			direccion: "c/ Libreros, 23",
			telefono: "900900900",
			nif: "X-25436789"
			},
		cliente: {
			nombre: "Libreria Boracay",
			direccion: "Avda del Rey, 12",
			telefono: "600600600",
			nif: "X-89763452"
			},
		elementos: [
			{ descripcion: "Libro 1", cantidad: 12, precio: 14 },
			{ descripcion: "Libro 2", cantidad: 10, precio: 20 },
			{ descripcion: "Libro 3", cantidad: 15, precio: 34 }
			],
		informacion: {
			baseImponible: 0,
			iva: 1.21,
			total: 0,
			formaPago: "contado"
		}
    // calculaTotal = function() {}
	};
		
		// MÃ©todos de cÃ¡lculo del total y de visualizaciÃ³n del total

			factura.calculaTotal = function() {
				for (let i = 0; i < this.elementos.length; i++) {
					this.informacion.baseImponible += 
          this.elementos[i].cantidad * this.elementos[i].precio;
				}
				this.informacion.total = 
          this.informacion.baseImponible * this.informacion.iva;
			};
			
			factura.muestraTotal = function() {
				this.calculaTotal();
				alert("TOTAL = " + this.informacion.total + " euros");
			};
			
			factura.muestraDatos = function (){
				this.calculaTotal();
        sHTML = "";
				sHTML += "<p><b>Datos Empresa</b></p>";
				sHTML +="<ul>";
				for (i in this.empresa) {
				    sHTML +="<li><span class=Cap>" + i + "</span>: " + this.empresa[i] + "</li>";
				}
				sHTML +="</ul>";
				
				sHTML +="<p><b>Datos Cliente</b></p>";

				sHTML +="<ul>";
				for (i in this.cliente) {
				    sHTML +="<li><span class=Cap>" + i + "</span>: " + this.cliente[i] + "</li>";
				}
				sHTML +="</ul>";
				
				sHTML +="<p><b>Lista de elementos</b></p>";
				sHTML +="<ul class=elementos>";
				sHTML +="<li class=elementos>Descripcion</li>";
				sHTML +="<li class=elementos>Cantidad</li>";
				sHTML +="<li class=elementos>Precio</li>";
				sHTML +="</ul>";
				for(var i=0; i<this.elementos.length; i++){
				    sHTML +="<ul class=elementos>";
				    for (j in this.elementos[i]) {
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



document.querySelector("#btn1").onclick = function () {
  document.querySelector("#factura1").innerHTML = 
          factura.muestraDatos();
}