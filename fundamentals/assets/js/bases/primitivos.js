let nombre = 'Peter Parker';        //? todo lo que este dentro de las comillas es considerado un string
console.log( nombre );

nombre = 'Ben Parker';              //? de esta forma podemos sobrescribir el valor de una variable declarada con let
console.log( nombre );

nombre = "Tia May";                 //? estas son otras dos formas de escribir strings 
nombre = `Tia May`;

console.log( typeof nombre );       //? de esta forma podemos saber que tipo de dato guarda una variable

nombre = 123;
console.log( typeof nombre);        //? en este caso la consola nos indica que nombre es un tipo de dato numerico 'number'

let isMarvel = false;
console.log( typeof isMarvel );     //? ahora la consola nos devolvera que el tipo de la variable isMarvel es booleaano 'boolean'

let superPoder;
console.log( superPoder );          //? cuando no asignamos un valor a una variable por defecto nos la devuelve como indefinida

let soyNull = null;
console.log( typeof soyNull );      //? Los navegadores reconocen el valor 'null' como un objeto pero en realidad es 'null'

//! todo en Javascript es un objeto exepto los valores primitivos 

let symbol = Symbol();
console.log( typeof symbol );      //?

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log( symbol === symbol2);   //? esto deberia volver true, pero devuelve false