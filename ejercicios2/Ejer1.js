import readline from "node:readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("ingrese el nombre del empleado: ", function(nombre){
    rl.question("Ingrese las horas trabajadas en la semana: ", function(hr){
        rl.question("ingrese el pago por hr: ",function(pago){

            let horas = parseFloat(hr);
            let pagos = parseFloat(pago);

            let total = horas * pagos

            console.log("\n --Salario del empleado--");
            console.log(`${nombre}`);
            console.log(`Salario semanal: $${total.toFixed(2)}`);

            rl.close();


        });
    });
});