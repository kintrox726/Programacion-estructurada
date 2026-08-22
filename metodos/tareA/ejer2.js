//Elabore un programa que solicite al usuario un código de carrera con el formato 
//U20260867. Utilice el método correspondiente para mostrar únicamente las primeras tres letras del código

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese el codigo de la carrera: ", (codigo) => {
    codigo = String(codigo);
    console.log(`Las primeras tres letras del codigo son: ${codigo.slice(0, 3)}`);
    rl.close();

});