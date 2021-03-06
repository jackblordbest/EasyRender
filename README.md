# EasyRender
Utilidades para la creación de aplicaciones web rápidas usando framework7 y similares. Rápido y pequeño tamaño.
Compartido para quien busque algo simple y eficaz. Se aceptan mejoras, sujerencias y añadidos.

Busco remplazar renderizadores tan "complejos" como vue.js o Template7 y conseguir el mismo resultado sin usar etiquetas o nombres personalizados.

## Uso
<script type="text/javascript" src="EasyRender.js"></script>

Objeto: EasyRender;


## Configuración (Opcional)

EasyRender.Marca_I = '{{'; //Marca de búsqueda inicial del html
EasyRender.Marca_F = '}}'; //Marca de búsqueda final del html



## Renderizar el html
                                               
EasyRender.Renderizar ( entrada_html , callback , salida_html<Opcional> );

---entrada_html = document.getElementsByClassName("page-content") || document.body;

---callback = //llamada renderizado finalizado.

---salida_html --> (Opcional) Por defecto la salida se redirige a la entrada. 

Sí quiere evitar el doble renderizado del html, que cargue el html y después de que haya cargado vuelva a cargar el nuevo html formateado. Debe introducir sú html en un objeto que no se renderizará (<script> </script>), introducir como entrada de html estás etquetas por sú id o como desee y redirigir la salida al html de la página. Ejemplo más abajo.


salida_html = document.getElementsByClassName("page-content") || document.body;


--- return = Sí no se especifica el return se añadirá automáticamente. Sí se detecta un "return" dentro del html se deberá especificar la salida con ese "return".




### HTML NORMAL (Ejemplo)

*Variables globales
*Funciones

```javascript

<body>
<h1>{{ ajustes.saludos; }}</h1>	 


<h1>{{ 

if (hola = "bien") {
  return hola;
} else {
  return cualquier_func ();
}

}}</h1>	

<h1>{{ 

function saludos () {
   var guay = "saludos";
   return guay;
};


return saludos();

}}</h1>	


<h1>{{ Console.log("Funciona");"Titulo;" }}</h1>	




<script type="text/javascript">

EasyRender.Renderizar(document.body , function () {

  console.log("renderizado");
        
});

</script>


</body>

```




### HTML evitando el doble renderizado +velocidad (Ejemplo)


```javascript
<body>
	<script id="EasyRender" type="text/html">


        <h1>{{


        if (ajustes.produccion) {
            return "sdasddsa";

        }

        }}</h1>	 


	</script>
</body>


<script type="text/javascript">

EasyRender.Renderizar(document.getElementById("EasyRender") , function () {

  console.log("renderizado");
        
}, document.body );

</script>

```







## Importar Script

EasyRender.ImportarScript( nombre , callback );
```javascript
EasyRender.ImportarScript ("recursos/modulos/general/utilidades.js", function() {
        console.log("script cargado");
});
```
*Para acceder a los scripts cargados: EasyRender.Scrips_Cargados;


## Eliminar Script

EasyRender.EliminarScript( nombre );
```javascript
EasyRender.ImportarScript ("recursos/modulos/general/utilidades.js");
```


## Importar Css

EasyRender.ImportarCss ( nombre , callback );
```javascript
EasyRender.ImportarScript ("recursos/modulos/general/estylo.css", function() {
        console.log("css cargado");
});
```
*Para acceder a los scripts cargados: EasyRender.Scrips_Cargados;

## Depurar

EasyRender.Depurar();

Habilita la edición en tiempo real desde el navegador del documento body (<body></body>).








