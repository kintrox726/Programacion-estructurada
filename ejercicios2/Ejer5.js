import readline from "node:readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


rl.question("Ingrese la cantidad en dolares: ", function(dolares){
    let Dolaresto = parseFloat(dolares);

    let total = Dolaresto * 0.87


    console.log(`\N--Equivalencia en dolares a euros--"`);
    console.log(`equivalente en dolares: $${Dolaresto}`);
    console.log(`equivalente en dolares: $${total}`);

    rl.close();

});