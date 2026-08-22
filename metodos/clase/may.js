import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Ingrese un numero de referencia de 6 digitos: ", (referencia) => {
  let referenciaNum = parseInt(referencia);
  let referenciaText = referenciaNum.toString();

  let primerosDigitos = referenciaText.slice(0, 3);
  console.log(`Numero de referencia: ${referenciaNum} \n primeros 3 digitos: ${primerosDigitos}`);
  rl.close();
});

///rl.question("Ingrese el numero de factura (FAC- 45678): ", (factura) => {
///  let facturaNum = factura.slice(4);
///  console.log(`Numero de factura: ${facturaNum}`);
///  rl.close();
///});
  


///rl.question("Ingrese su correo electronico: ", (correo) => {
///  let corroMini = correo.toLowerCase();
///  console.log(`correo electronico: ${correo}`)
///  rl.close();
///});

//rl.question("Ingrese el nombre del evento: ",(evento) => {
//  let eventoMayusculas = evento.toUpperCase();
//  console.log(`Entrada del nombre : ${evento}\n entrada en mayusculas: ${eventoMayusculas}`);
//  rl.close();
//})