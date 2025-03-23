function generarNumeroAleatorio(min, max) { 
    if (min >= max) {
        console.error("El valor mínimo debe ser menor que el valor máximo.");
        return null;
    }

    let valor = Math.random() * (max - min) + min;
    return Math.round(valor);
}

let limiteInferior = 1;
let limiteSuperior = 10;

console.log("===== Generador de Números Aleatorios =====");

for (let i = 1; i <= 5; i++) {
    let numeroGenerado = generarNumeroAleatorio(limiteInferior, limiteSuperior);
    if (numeroGenerado !== null) {
        console.log(`Intento ${i}: Número generado entre ${limiteInferior} y ${limiteSuperior} => ${numeroGenerado}`);
    }
}

console.log("==== Fin del proceso ====");
