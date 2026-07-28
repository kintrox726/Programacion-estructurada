import readline from "node:readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese el nombre del producto: ", function(nombre){
    rl.question("Ingrese el precio del producto: ", function(precio){
        rl.question("Ingrese la cantida del producto: ", function(cantidad){

            nombre = String(nombre),
            precio = Number(precio),
            cantidad = Number(cantidad)

            const total = precio*cantidad


            console.log(`nombre de producto:  ${nombre}  cantidad a comprar:  ${cantidad} total a pagar:  ${total}`);
            rl.close
        })
    })

});