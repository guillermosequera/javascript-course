let a = 10;                 //? todos los primitivos son pasados por valor
let b = a;
a = 30;

console.log({ a, b});           //? en javascript todo es un objeto exepto los primitivos


let juan = { nombre: 'Juan'};       //? todos los objetos son pasados por referencia
let ana = juan;
ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );

console.log({ peter, tony });


//arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });