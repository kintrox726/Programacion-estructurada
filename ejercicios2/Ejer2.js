import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("ingrese el precio del producto: ",function(precio){
    rl.question("ingrese el descuento del producto: ",function(descuento){

        let precios = parseFloat(precio);
        let descuentos = parseFloat(descuento);

        const total = precios - (precios * descuentos / 100);

        console.log("precio del producto: ",(precios));
        console.log("% de descuento: ",(descuentos));
        console.log("precio final del producto: ",(total.toFixed(2)));

        rl.close();

    });
});