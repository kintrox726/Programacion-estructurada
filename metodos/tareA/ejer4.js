import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Ingrese el nombre del estudiante: ', (nombre) => {
	rl.question('Ingrese el apellido: ', (apellido) => {
		rl.question('Ingrese el año de ingreso: ', (año) => {
			rl.question('Ingrese la cuota mensual: ', (cuota) => {
				const nombreMayusculas = String(nombre).toUpperCase();
				const apellidoMayusculas = String(apellido).toUpperCase();
				const añoTexto = String(año);
				const cuotaMensual = Number(cuota);

				console.log(`Nombre y apellido: ${nombreMayusculas} ${apellidoMayusculas}`);
				console.log(`Primeras tres letras del apellido: ${apellidoMayusculas.slice(0, 3)}`);
				console.log(`Ultimos dos digitos del anio de ingreso: ${añoTexto.slice(-2)}`);
				console.log(`Cuota mensual: ${cuotaMensual.toFixed(2)}`);
				rl.close();
			});
		});
	});
});
