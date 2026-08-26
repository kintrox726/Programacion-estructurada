import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre: ", (nom)=>{
    rl.question("Ingrese el anio de nacimiento: ", (anioNac)=>{

        let fechaActual = new Date();

        let anioactual = fechaActual.getFullYear();
        let edad = anioactual - parseInt(anioNac);

        console.log(`${nom}, su edad aproximada es ${edad} Anios`);
        rl.close();
        
    });
});