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

	var contador = 0;
    var nombre;
    var temperatura;
    var sexo;
    var edad;
    var contadorHombres = 0;
    var contadorMujeres = 0;
    var acumuladorEdades = 0;
    var edadPromedio;
    var maximoTemperaturaMujer;
    var primeraVezMujer = true;
    var nombreMaximoTemperaturaMujer;

    while (contador < 5) {
        contador++;

        do {
            nombre = prompt("Ingrese su nombre");
        } while (nombre == null);

        do {
            temperatura = prompt("Ingrese temperatura");
            temperatura = parseInt(temperatura);
        } while (isNaN(temperatura) || temperatura < 30);

        do {
            sexo = prompt("Ingrese sexo (f-m)");
        } while (sexo != 'f' && sexo != 'm');

        do {
            edad = prompt("Ingrese edad");
            edad = parseInt(edad);
        } while (isNaN(edad) || edad < 0);
        /**
         * FIN TOMA DE DATOS
         */

        // PUNTO A
        if (sexo == 'f') {
            contadorMujeres++;
            // PUNTO C 
            if (primeraVezMujer) {
                primeraVezMujer = false;
                maximoTemperaturaMujer = temperatura;
                nombreMaximoTemperaturaMujer = nombre;
            } else {
                if (temperatura > maximoTemperaturaMujer) {
                    maximoTemperaturaMujer = temperatura;
                    nombreMaximoTemperaturaMujer = nombre;
                }
            }
        } else {
            contadorHombres++;
        }

        // PUNTO B
        acumuladorEdades += edad;
        
    } // END WHILE

    // PUNTO A
    console.log('a) cantidad de mujeres ' + contadorMujeres);
    console.log('a) cantidad de hombres ' + contadorHombres);
    // PUNTO B
    edadPromedio = acumuladorEdades / contador;
    console.log('b) Edad promedio: ' + edadPromedio);
    // PUNTO C
    if (nombreMaximoTemperaturaMujer == undefined) {
        console.log('c) No se ingresaron mujeres');
    } else {
        console.log('c) Nombre mujer mayor temperatura ' + nombreMaximoTemperaturaMujer);
    }