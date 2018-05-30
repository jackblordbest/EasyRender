'use strict';

/*
	Adrián Fernández 30/05/2018

	Ultima actualización: 30/05/2018 Versión: 0.1
*/



//config
var EasyRender = {
	'Marca_I' : '{{',
	'Marca_F' : '}}',
	'Scrips_Cargados': []
};
	


//Renderiza el HTML y ejecuta la función contenida
EasyRender.renderizar = function (objeto) {
	
	
	var T = objeto.innerHTML,
 
		O = T.substring(T.indexOf(EasyRender.Marca_I) + EasyRender.Marca_I.length ,T.indexOf(EasyRender.Marca_F));


	if (O.indexOf("return") != -1) {

		var I = O.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&gt;/g, ">");

	} else {
		
		var I = "return " + O ;
	
	}
	

	objeto.innerHTML = T.replace(EasyRender.Marca_I + O + EasyRender.Marca_F, new Function (I)() || "");
	
	
	
};
	
	
	

'use strict';'use strict';

/*
	Adrián Fernández 30/05/2018

	Ultima actualización: 30/05/2018 Versión: 0.1
*/



//config
var EasyRender = {
	'Marca_I' : '{{',
	'Marca_F' : '}}',
	'Scrips_Cargados': []
};
	


//Renderiza el HTML y ejecuta la función contenida
EasyRender.Renderizar = function (entrada, callback, salida) {
	
try {

		if (typeof entrada != "string") {

			var T = entrada.innerHTML;
		} else {

			T = entrada;
		}


		var num = T.split(EasyRender.Marca_I).length - 1;
 
		for (var i = 0; i < num; i++) {



			var	O = T.substring(T.indexOf(EasyRender.Marca_I) + EasyRender.Marca_I.length ,T.indexOf(EasyRender.Marca_F));


			if (O.indexOf("return") != -1) {

				var I = O.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&gt;/g, ">");

			} else {

				var I = "return " + O.replace(/[\n\r]/g, '') ;

			}

			//console.log( new Function (I));

			T = T.replace(EasyRender.Marca_I + O + EasyRender.Marca_F, new Function (I)() || "");

		}



		if (typeof salida == "undefined") {

			 entrada.innerHTML = T;
		} else {
			 salida.innerHTML = T;
		}


		return callback(true);
	
	} catch(e){
		console.log(e);
	};

};
	
	
	





//Inserto un script mediante url
EasyRender.ImportarScript = function (nombre, callback) {
	
	try {
		if (EasyRender.Scrips_Cargados.indexOf(nombre) != -1) {
				return callback(true);
		};

		var s = document.createElement("script");
		s.onload = callback;
		s.src = nombre;
		s.onerror = function(Error) {
			return callback(Error);
			console.log(Error);
		};
		s.setAttribute("id", nombre);
		document.querySelector("head").appendChild(s);
		
		EasyRender.Scrips_Cargados.push(nombre);
    } catch (e) {
    	console.log(e);
    }


	
};	
	
	


//Elimina script ya cargados
EasyRender.EliminarScript = function (nombre) {
	
	  try {
        var index = EasyRender.Scrips_Cargados.indexOf(nombre);
        if (index > -1) {
            document.getElementById(nombre).remove();
            EasyRender.Scrips_Cargados.splice(index, 1);
        }
    } catch (e) {
        console.log(e);
    }

};	

	


//Añado un stylesheet al documento
EasyRender.ImportarCss = function (nombre, callback) {
	
	try {

		var s = document.createElement('link');
		s.rel = 'stylesheet';
		s.type = 'text/css'; //opcional
		s.href = nombre;
		s.onload = callback;
		document.querySelector("head").appendChild(s);

    } catch (e) {
        console.log(e);
    }

};	
	
	
	
	
	
//Renderiza el HTML y ejecuta la función contenida
EasyRender.Depurar = function () {

	var cargado = true;

		console.log("cargadoo");
		var container = document.body;
		if (container.addEventListener) {
			console.log("Activando modo depuración");
			container.addEventListener ('DOMSubtreeModified', function () { 

				
				if (cargado) {
					cargado = false;
					console.log("Ejecutando");
					EasyRender.Renderizar(document.body, function () {
						
						cargado = true;

					} ) 
				}


			}, false);
		} else {
			console.log("El documento no posee evento listener");

		}
	
}
	


/*
	Adrián Fernández 30/05/2018

	Ultima actualización: 30/05/2018 Versión: 0.1
*/



//config
var EasyRender = {
	'Marca_I' : '{{',
	'Marca_F' : '}}',
	'Scrips_Cargados': []
};
	


//Renderiza el HTML y ejecuta la función contenida
EasyRender.Renderizar = function (T, callback, salida) {
	

		var num = T.split(EasyRender.Marca_I).length - 1,

		final = "";

 
	for (var i = 0; i < num; i++) {
 


		var	O = T.substring(T.indexOf(EasyRender.Marca_I) + EasyRender.Marca_I.length ,T.indexOf(EasyRender.Marca_F));


		if (O.indexOf("return") != -1) {

			var I = O.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&gt;/g, ">");

		} else {

			var I = "return " + O.replace(/[\n\r]/g, '') ;

		}

		//console.log( new Function (I));

		T = T.replace(EasyRender.Marca_I + O + EasyRender.Marca_F, new Function (I)() || "");

	}


	console.log(typeof salida);

	if (typeof salida == "undefined") {
		entrada.innerHTML = T;
	} else {
		salida.innerHTML = T;
	}
	
	
	return callback(true);
	
};
	
	
	





//Inserto un script mediante url
EasyRender.ImportarScript = function (nombre, callback) {
	
	try {
		if (EasyRender.Scrips_Cargados.indexOf(nombre) != -1) {
				return callback(true);
		};

		var s = document.createElement("script");
		s.onload = callback;
		s.src = nombre;
		s.onerror = function(Error) {
			return callback(Error);
			console.log(Error);
		};
		s.setAttribute("id", nombre);
		document.querySelector("head").appendChild(s);
		
		EasyRender.Scrips_Cargados.push(nombre);
    } catch (e) {
    	console.log(e);
    }


	
};	
	
	


//Elimina script ya cargados
EasyRender.EliminarScript = function (nombre) {
	
	  try {
        var index = EasyRender.Scrips_Cargados.indexOf(nombre);
        if (index > -1) {
            document.getElementById(nombre).remove();
            EasyRender.Scrips_Cargados.splice(index, 1);
        }
    } catch (e) {
        console.log(e);
    }

};	

	


//Añado un stylesheet al documento
EasyRender.ImportarCss = function (nombre, callback) {
	
	try {

		var s = document.createElement('link');
		s.rel = 'stylesheet';
		s.type = 'text/css'; //opcional
		s.href = nombre;
		s.onload = callback;
		document.querySelector("head").appendChild(s);

    } catch (e) {
        console.log(e);
    }

};	
	
	



//Inserto un script mediante url
EasyRender.ImportarScript = function (nombre, callback) {
	
	try {
		if (EasyRender.Scrips_Cargados.indexOf(nombre) != -1) {
				return callback(true);
		};

		var s = document.createElement("script");
		s.onload = callback;
		s.src = nombre;
		s.onerror = function(Error) {
			return callback(Error);
			console.log(Error);
		};
		s.setAttribute("id", nombre);
		document.querySelector("head").appendChild(s);
		
		EasyRender.Scrips_Cargados.push(nombre);
    } catch (e) {
    	console.log(e);
    }


	
};	
	
	


//Elimina script ya cargados
EasyRender.EliminarScript = function (nombre) {
	
	  try {
        var index = EasyRender.Scrips_Cargados.indexOf(nombre);
        if (index > -1) {
            document.getElementById(nombre).remove();
            EasyRender.Scrips_Cargados.splice(index, 1);
        }
    } catch (e) {
        console.log(e);
    }

};	

	


//Añado un stylesheet al documento
EasyRender.ImportarCss = function (nombre, callback) {
	
	try {

		var s = document.createElement('link');
		s.rel = 'stylesheet';
		s.type = 'text/css'; //opcional
		s.href = nombre;
		s.onload = callback;
		document.querySelector("head").appendChild(s);

    } catch (e) {
        console.log(e);
    }

};	
	
	
	
	
	
	
	
	
