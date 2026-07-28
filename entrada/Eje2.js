import readline from "node:readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("ingrese la base del rectangulo: " ,function(base){
    rl.question("ingrese la altura del rectangulo: ", function(altura){
        
        base = Number(base);
        altura = Number(altura);

        const  area = base * altura

        console.log(`Su area es de: ${area}`)

        rl.close()

    })
})