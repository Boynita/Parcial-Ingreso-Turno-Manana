/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{

	var nombre;
	var lugar;
	var respuesta;
	var personas;
	var temporada;
	var mayorPersonas;
	var titularMayor;
	var sumaAcumulada = 0;
	var contadorInvierno = 0;
    var promedioInvierno = 0;


	do {


	do {
		nombre=prompt("ingrese el nombre del titular");
	} while (!(isNaN(nombre)));

	do {
		lugar=prompt("ingrese el lugar bariloche, cataratas o salta");
	} while (lugar != "bariloche" && lugar != "salta"  && lugar != "cataratas" );

	do {
		temporada= prompt("ingrese la temporada invierno, otoño, verano, primavera");
	} while (temporada != "otoño" && temporada != "invierno" && temporada != "primavera" && temporada != "verano" );

	do {
	personas=prompt("ingrese la cantidad de personas");
	personas=parseInt(personas);
	} while (isNaN(personas) || personas <= 0);

	if(lugarMayor < lugar){
		lugarMayor=lugar;

	}

	if(titularMayor < nombre){
		titularMayor=nombre;
		mayorPersonas=personas;
	}

	if(temporada == "invierno"){
		sumaPersonas=sumaPersonas+personas
		contadorInvierno++;
	}

	respuesta=prompt("desea ingresar denuevo?");


   } while (respuesta == "si");

   document.write("el lugar mas elegido es " + lugarMayor + "<br>");

   document.write("el nombre del titular que lleva mas pasajeros es " + titularMayor + "<br>");
if(temporada == "invierno"){

	promedioInvierno=sumaPersonas/contadorInvierno;
	promedioInvierno=parseInt(promedioInvierno);

	document.write("el promedio de personas por viajq eu viajan en invierno es " + promedioInvierno);

}


}
