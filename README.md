# EasyRender
Utilidades para la creación de aplicaciones web rápidas usando framework7 y similares. Rápida y pequeño tamaño.
Compartido para quien busque algo simple y eficaz. Se aceptan mejoras, sujerencias y añadidos.



## Uso
<script type="text/javascript" src="recursos/modulos/EasyRender/EasyRender.js"></script>

Objeto: EasyRender;


## Configuración (Opcional)

EasyRender.Marca_I = '{{'; //Marca de búsqueda inicial del html
EasyRender.Marca_F = '}}'; //Marca de búsqueda final del html



## Renderizar el html

EasyRender.Renderizar(objeto);

/*

objeto = document.body;
objeto = document.getElementsByClassName("page-content")[0];
etc...
*/

### HTML (Ejemplo)

*Variables globales
*Funciones
```javascript
<h1>{{ ajustes.saludos; }}</h1>	 


<h1>{{ 

if (hola = "bien") {
  return hola;
}

}}</h1>	

<h1>{{ Console.log("Funciona");"Titulo;" }}</h1>	

```
...



## Importar Script

EasyRender.ImportarScript(nombre, callback);
```javascript
EasyRender.ImportarScript ("recursos/modulos/general/utilidades.js", function() {
        console.log("script cargado");
});
```
*Para acceder a los scripts cargados: EasyRender.Scrips_Cargados;


## Eliminar Script

EasyRender.EliminarScript(nombre);
```javascript
EasyRender.ImportarScript ("recursos/modulos/general/utilidades.js");
```


## Importar Css

EasyRender.ImportarCss(nombre, callback);
```javascript
EasyRender.ImportarScript ("recursos/modulos/general/estylo.css", function() {
        console.log("css cargado");
});
```
*Para acceder a los scripts cargados: EasyRender.Scrips_Cargados;










