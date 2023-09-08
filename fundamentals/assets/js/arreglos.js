//? Los arreglos son un objeto muy parecido a una lista de informacion que contiene un grupo de elementos.
//? Usualmente esa informacion dentro del arreglo es del mismo tipo de dato pero en javascript eso no es una regla y no siempre sucede.

// const arr = new Array(10);       //? asi podemos crear una instacia de un nuevo arreglo.
// const arr = [];                     //? esto por consola nos devuelve un arreglo vacio.
// console.log( arr );

let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({ videoJuegos });

console.log( videoJuegos[0] );

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    () => {},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy', 
        'Woodman'
    ]]
];

console.log({ arregloCosas });
console.log( arregloCosas[0] );         //? esta accion nos devuelve el valor que esta en la posicion inicial de nuestro arreglo mas conocido el 'index'
console.log( arregloCosas[2] );         //? aca las consola nos muestra el valor de la posicion 3 de nuestro arreglo.
console.log( arregloCosas[7][3] );      //? de esta forma la consola nos muestra el valor en la cuarta posicion de nuestro arreglo en la posicion 7 de nuestro arreglo.
console.log( arregloCosas[7][4][1] );   //? de esta forma nos muestra el segundo valor de nuestro arreglo en la posicion 4 posicion de nuestro arreglo en la 7 posicion de nuestro arreglo.
