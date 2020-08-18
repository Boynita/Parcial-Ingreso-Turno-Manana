/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:

marca, precio, peso en kilogramos, tipo(sólido o líquido)

a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar(){


  var respuesta;
  var marca;
  var precio;
  var peso;
  var tipo;
  var acumuladorPesoTotal = 0;
  var masCaroLiquido;
  var primeraVezLiquido = true;
  var marcaLiquidoMasCaro;
  var masLivianoSolidos;
  var marcaMasLivianoSolidos;
  var primeraVezSolido = true;
  var acumuladorPesoSolidos = 0;
  var contadorSolidos = 0;

  do {
      do {
          marca = prompt("Ingrese una marca");
      } while (marca == null);

      do {
          precio = prompt("Ingrese precio");
          precio = parseInt(precio);
      } while(isNaN(precio) || precio < 1);

      do {
          peso = prompt("Ingrese peso");
          peso = parseInt(peso);
      } while (isNaN(peso) || peso < 1);
      
      do {
          tipo = prompt("Ingrese tipo");
      } while (tipo != 's' && tipo != 'l');
      
      // PUNTO A  
      acumuladorPesoTotal += peso;

      // PUNTO B
      if (tipo == 'l') {
          if (primeraVezLiquido) {
              primeraVezLiquido = false;
              masCaroLiquido = precio;
              marcaLiquidoMasCaro = marca;
          } else {
              // NO ES LA PRIMERA VEZ
              // masCaroLiquido TIENE VALOR
              if (precio > masCaroLiquido) {
                  masCaroLiquido = precio;
                  marcaLiquidoMasCaro = marca;
              }
          }
      } else {
          // SON SOLIDOS
          contadorSolidos++;
          acumuladorPesoSolidos += peso;
          if (primeraVezSolido) {
              primeraVezSolido = false;
              masLivianoSolidos = peso;
              marcaMasLivianoSolidos = marca;
          } else {
              if (peso < masLivianoSolidos) {
                  masLivianoSolidos = peso;
                  marcaMasLivianoSolidos = marca;
              }
          }
      }

      respuesta = confirm("Desea continuar?");
  } while (respuesta);
  
  // PUNTO A
  console.log('Peso total ' + acumuladorPesoTotal);
  // PUNTO B
  if (marcaLiquidoMasCaro) {
      console.log('El mas caro de los liquido es ' + marcaLiquidoMasCaro);
  } else {
      console.log('No se cargaron liquido');
  }
    
  
  if (contadorSolidos > 0) {
      // PUNTO C
      console.log('Marca mas liviano solidos ' + marcaMasLivianoSolidos);
      // PUNTO D
      console.log('el promedio de peso de solidos es ' + (acumuladorPesoSolidos / contadorSolidos));
  } else {
      console.log('No se ingresaron solidos');
  }





}


