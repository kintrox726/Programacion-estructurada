import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese su nombre: ", (nombre) => {

    nombre = String(nombre);
    console.log(`Hola, ${nombre.toUpperCase()}`);
    console.log(`Hola, ${nombre.toLowerCase()}`);
    rl.close();
});