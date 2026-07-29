import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un dato cualquiera: ", (dato) => {

    let resultado = parseFloat(dato);


    let esInvalido = isNaN(resultado);

    
    console.log(`Dato ingresado: ${dato}`);
    console.log(`Resultado de parseFloat: ${resultado}`);
    console.log(`Resultado de isNaN: ${esInvalido}`);

    rl.close();
});