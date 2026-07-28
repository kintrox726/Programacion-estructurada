const estudiante ={
    nombre: "Juan",
    edad: 20,
    carrera: "Ingeniería",
};

var nombre = estudiante.nombre;
var edad = estudiante.edad;
var carrera = estudiante.carrera;

console.log( nombre);
console.log( edad);
console.log( carrera);

const{nombre, edad, carrera} = estudiante;
console.log( nombre);
console.log( edad);
console.log( carrera);
