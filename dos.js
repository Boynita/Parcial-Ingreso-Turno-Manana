/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  var productos;
  var respuesta;
  var pesoDeCompra;
  var totalDeCompra;
  var marcaMasCaraLiquidos;
  var marcaMasLivianaSolidos;

  respuesta="S"

  while(respuesta){
    productos= prompt("ingrese el producto.");
    while(productos != "marca" && != "precio" && "peso en kilogramos" && != "solido" || != "liquido");
    productos= prompt("Error, ingrese el producto correcto.");

    pesoDeCompra= parseInt(prompt("Su peso de compra en total es."))
    while(isNaN(totalDeCompra)){
      totalDeCompra= parseInt(prompt("Error, en su total de compra."));
    }
    do {
			marcaMasCaraLiquidos = prompt("Ingrese el producto");
			while (!(isNaN(marcaMasCaraLiquidos))) {
				marcaMasCaraLiquidos = prompt("Error, ingrese la marca");
			}
    } while (!(isNaN(marcaMasCaraLiquidos)));

    do {
			marcaMasLivianaSolidos = prompt("Ingrese el producto");
			while (!(isNaN(marcaMasLivianaSolidos))) {
				marcaMasLivianaSolidos = prompt("Error, ingrese la marca");
			}
    } while (!(isNaN(marcaMasLivianaSolidos)));
    
  }//end while

  console.log(marcaMasLivianaSolidos + marcaMasCaraLiquidos + totalDeCompra);
}
