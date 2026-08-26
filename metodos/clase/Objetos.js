let fecha = new Date();
let año = fecha.getFullYear();
let mes = fecha.getMonth() + 1 ;
let dia = fecha.getDate();
let diasemana = fecha.getDay();

/// para sacar fechas
console.log(fecha);
console.log(`Solamente el año es: ${año}`);
console.log(`Solamente el mes es: ${mes}`);
console.log(`Solamente el día de el mes es: ${dia}`);
console.log(`Solamente el día de la semana es: ${diasemana}`);

// para sacar horas
let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();

console.log(`-------------------------------------------`);
console.log(`Solamente las horas ${hora}`);
console.log(`Solamente los minutos: ${minutos}`);
console.log(`Solamente los segundos: ${segundos}`);
console.log(`${año}/${mes}/${dia}`);


