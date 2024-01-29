
//* Esta fue la primera prueba de javascript
// console.log(console.log('Hola mundo'));

//! Variables
//* Es un contenedor de informacion que apunta a un lugar en memoria.
//* Dicha informacion puede cambiar en el futuro.

// let a = 10;
// var b = 10;
// const c = 10;       //* const hace referencia a un lugar en la memoria inmutable osea que no puede cambiar

let a = 10;
var b = 'Hola ';            //! No debemos escribir variables con var
let c = ' Spirderman';      //* cuando agregamos espacios dentro de un "string" javascript si considera estos espacios

const hello = b + a + c;

// console.log('%c Mis Variables', 'color: blue; font-weight: bold');  //? esta es una forma de aplicar css en la consola
// console.log(hello);
// console.table({a , b, c});          //! console es el objeto
// console.warn(hello);                //! log, table, warn, error son los metodos de ese objeto
// console.error(hello);

//* No es recomendable escribir variables con var porque esto hace referencia a el objeto windows y por esto podemos estar sobreescribiendo las variables que se encuentran en el objeto global windows
