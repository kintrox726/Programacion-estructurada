import { stdin } from "node:process"
import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese precio unitario del producto: ",function(unitario){
    rl.question("ingrese la cantidad a comprar: ",function(cantidad){

        let unitariototal = parseFloat(unitario);
        let cantidadtotal = parseInt(cantidad);

        let total= unitariototal*cantidadtotal

        console.log("\N--Registro de la compra--");
        console.log("precio unitario: ",(unitariototal));
        console.log("Cantidad: ",(cantidadtotal));
        console.log(`total a pagar: $${total}`);

        rl.close();

    });
});