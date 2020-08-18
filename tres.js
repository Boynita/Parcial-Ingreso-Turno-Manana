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
function mostrar(){

	var respuesta;
	var nombreDelTitular;
	var lugar;
	var temporada;
	var contadorDePersonasQueViajan = 0;
	var primeraVezLugar = true;
	var lugarMasElegido;
	var primeraVezPasajeros = true;
	var nombreDelTitualQueMasPasajerosLleva;
	var acumuladorDePersonasPorViaje = 0;


	while(contadorDePersonasQueViajan > 20){
		contadorDePersonasQueViajan++;
		acumuladorDePersonasPorViaje += temporada;
	do{
		//Nombre del titular.
		do{
			nombreDelTitular = prompt("Ingrese su Nombre");
		}while(nombreDelTitular = null);

		//Nombre del Lugar.

		do{
			lugar = prompt("Ingrese el Destino");
		}while(lugar != "bariloche" && lugar != "cataratas" || lugar != "salta");

		//Temporada

		do{
			temporada = prompt("Ingrese la temporada que quiera viajar");
		}while(temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera");
//*************************************************************************** */
		//PUNTO A
		if(lugar == "bariloche" && lugar == "cataratas" && lugar == "salta"){

			if(primeraVezLugar){
				primeraVezLugar = false;
				lugarMasElegido = lugar;
			}
		}
		
		//PUNTO B
		if(nombreDelTitular == contadorDePersonasQueViajan){
			primeraVezPasajeros = false;
			nombreDelTitualQueMasPasajerosLleva = contadorDePersonasQueViajan;
		}

		if(contadorDePersonasQueViajan > 0){

			console.log ("Nombre del titular" + nombreDelTitular);

			console.log ("Destino ingresado" + lugar);

			console.log ("Promedio de personas por viaje" + (acumuladorDePersonasPorViaje / contadorDePersonasQueViajan));
		}else {
			console.log ("Error, no se ingresaron datos");
		}

		respuesta = confirm("Desea Continuar?");
	}while(respuesta);
	}//END WHILE
















}
