import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//rl.question("¿Cuál es tu ciudad? ", function(ciudad) {
//    console.log(`Tu ciudad es ${ciudad}`);
//    rl.close();
//});


//rl.question("cual es tu color favorito? ", function(color) {
//    console.log(`Tu color favorito es ${color}`);
//    rl.close();
//});


rl.question("¿Ingrese una letra? ", function(letra) {
    rl.question("¿Ingrese la segunda letra? ", function(letra2) {
        console.log("las letras ingresadas son: " + letra + letra2);
        rl.close();
    });
});