import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Ingrese un codigo numerico de ocho digitos: ', (codigo) => {
  codigo = String(codigo);
  console.log(`Los primeros cuatro digitos son: ${codigo.slice(0, 4)}`);
  rl.close();
});

