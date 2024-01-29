
// alert('Hola mundo');    //! debemos recordar que esta funcion es bloqueante asi qeu no se ejecutra nunguna
                        //! linea de codigo hasta que el usuario haga click en el alert




// prompt('Cual es tu nombre?')     //* este prompt por defecto va a retornar lo que escriba el usuario,
                                    //* incluyendo una coma podemos asignar un valor preestablecido.

// let nombre = prompt('Cual es tu nombre?', 'Sin nombre');

//* si el usuario cancela la entrada de el prompt esto devolvera un valor null

// confirm('Esta seguro de eliminar esto?');

//* esto le pregunta al usuario si confirma o no una accion, no devuelve nada pero hasta que no responda el usuario no continua el codigo.

//* podemos guardar esta eleccion en una variable y retornar la variable para trabajar en base a la opcion elegida por el usuario. Esto devolveria un booleano 'true' si el usuario confirmo y 'false' si cancelo.

// const selection = confirm('Esta seguro que desea eliminar esto?');
// console.log(selection);

//! es importante saber que este codigo no funcionaria fuera de el navegador web porque confirm, prompt y alert son metodos de el objeto windows.

//? en la consola podemos ver algo parecido a el objeto windows si acemos un console.log de el objeto "global"

console.log( global );