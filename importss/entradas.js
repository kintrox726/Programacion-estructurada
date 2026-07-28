//Importar modulos
import readline from "node:readline";

//Crear interfaz 
const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
});

//Hacemos la pregunta al usuaro
//rl.question("¿Cuál es tu nombre? ",function(nombre) {
//    rl.question("¿Cuál es tu edad? ",function(edad) {
//        console.log(`Hola ${nombre}, tengo ${edad} años de edad`);
//        rl.close();
//    });
//});

rl.question("ingrese un primer numero: ", function(num1) {
    rl.question("ingrese un segundo numero: ", function(num2) {

        num1 = Number(num1);
        num2 = Number(num2);

        let suma = num1 + num2;
        console.log(`La suma es: ${suma}`);
        rl.close();
    });
});