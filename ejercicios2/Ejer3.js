import readline from "node:readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("ingrese la logitud total expresada en metros: ", function(metros){
    let metrostotal = parseFloat(metros);
    let centimetros = metrostotal * 100;
    console.log(`La longitud en centímetros es: ${centimetros}cm`);
    rl.close();
});