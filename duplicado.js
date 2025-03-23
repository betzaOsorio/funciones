function palabraLarge (arreglo){
    let palabras= arreglo.split(" ")
    let palabraL = palabras[0]

    for (let i = 1; i < palabras.length; i++) { 
        if (palabras[i].length > palabraL.length) { 
          palabraL = palabras[i];
        }
      }
      return palabraL;


}

let texto = "La noche estrellada es hermosa";
  let resultado = palabraLarge(texto);
  console.log(`la cadena ingresada es:  \n ${texto}`);
  console.log(`La palabra mas larga es: ${resultado}`);
 