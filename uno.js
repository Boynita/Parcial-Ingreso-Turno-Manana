/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{	
	var nombre;
	var temperatura;
	var sexoF;
	var sexoM;
	var edades;
	var contador;
	var cantidadDePersonasFemeninas;
	var cantidadDePersonasMasculinas;
	var cantidadDePersonas;
	var promedioEnTotal;

	var datos;

	temperatura=39;
	contador=0;
	promedioEnTotal=0;



	do { //VALIDANDO DATOS
		datos = parseInt(prompt("Ingrese los datos."));	
		
		}while (isNaN(datos) || datos < 0) {
			(dato != "nombre" && != "temperatura" && != "edad");
			datos =(prompt("Error, ingrese los datos correctos."));
			contador++;
			
		cantidadDePersonasFemeninas= prompt("Ingrese sexo.");	
		cantidadDePersonasFemeninas= parseInt(cantidadDePersonasFemeninas);
		cantidadDePersonasMasculinas= prompt("Ingrese el sexo.");
		cantidadDePersonasMasculinas= parseInt (cantidadDePersonasMasculinas);

		while(cantidadDePersonas<5){
			cantidadDePersonas= prompt("Error, al ingresar los datos.");
			cantidadDePersonas= parseInt(cantidadDePersonas);
			}
		
		if(edades==promedioEnTotal){

			promedioEnTotal=edad;
		}else{
			temperatura=cantidadDePersonasFemeninas;
		}


	}

	console.log("Datos de las personas ingresadas al Hospital" + "datos del sexo" + "nombre" + "Si alguien tiene la temperatura alta."); 


	
}

