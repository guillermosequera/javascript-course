let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log( 'Largo', juegos.length);               //? Usando el punto luego de invocar nuestro arreglo podemos acceder a las propiedades de los arreglos.

let primero = juegos[0];                            //? de esta forma podemos usar el primer valor de el arreglo juegos o el indice de este arreglo 'index'.
let primero2 = juegos[ 2 - 2 ];                     //? tamien podemos usar operaciones matematicas para apuntar a un indice dentro de el arreglo en este ejemplo estamos accediendo a la posicion 0 de nuestro arreglo.
let ultimo = juegos[ juegos.length - 1 ];           //? suponiendo que tenemos un arreglo dinamico de esta forma podemos hacer uso de el valor en la ultima posicion de este arreglo sin saber cual es su indice en el arreglo.

console.log( primero );
console.log( primero2 );
console.log( ultimo );

juegos.forEach( (elemento, indice, arr) => {            //? esto nos sirve para ejecutar una accion por cada uno de los elementos de nuestro array [juegos].
    console.log({ elemento, indice, arr });             //? esta es la misma sintaxis siempre para usar los forEach (elemento, indice, arr).
})

let nuevaLongitud = juegos.push( 'F-zero' );            //? con el metodo push() podemos insertar nuevos elementos al final de nuestro arreglo.
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift( 'Fire Emblem' );        //? haciendo esto sobreescribimos la variable nuevaLongitud agregandole con el metodo unshift() un nuevo elemento al principio de nuestro arreglo.
console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop();                        //? el metodo pop() elimina el ultimo elemento de nuestro array
console.log({ juegoBorrado, juegos });                  //? de esta forma poder usar el juego que borramos de nuestro arreglo en este caso para mostrarlo por consola.

let pos = 1;

let juegosBorrados = juegos.splice( pos, 2 );           //? el metodo splice() recibe dos valores donde el primero apunta a la posicion de partida o donde queremos comenzar y el segundo valor indica cuantos elementos de el arreglo queremos eliminar desde la posicion de partida indicada en el elemento anterior.
console.log({ juegosBorrados, juegos});                 //? de esta forma podemos utilizar los elementos que eliminamos de nuestro arreglo en este caso para mostrarlos por consola.

let metroidIndex = juegos.indexOf('Metroid');           //? con el metodo indexOf() podemos obtener el indice de un elemento de nuestro arreglo
console.log({ metroidIndex });