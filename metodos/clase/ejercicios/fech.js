import readline from 'node:readline';
import { convertProcessSignalToExitCode } from 'node:util';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el ano: ", (anio)=> {
    rl.question("Ingrese el mes: ", (mes)=>{
        rl.question("Ingrese el dia: ",(dia)=>{

            let fecha = new Date(parseInt(anio), parseInt(mes)-1, parseInt(dia));

            console.log(`Fecha creada ${fecha}`);
            rl.close();


        })
    })
})
