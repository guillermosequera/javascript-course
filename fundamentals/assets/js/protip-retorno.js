// function crearPersona( nombre, apellido) {
//     return { nombre, apellido }
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido})


const persona = crearPersona( 'Fernando', 'Herrera');
console.log(persona);

function imprimeArgumentos() {
    console.log( arguments );
}

const imprimeArgumentos2 = (edad, ...args) => {
    // console.log({args});
    return args;
}


 const argumentos = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
 console.log({ argumentos });
 
 
 const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
 console.log({ casado, vivo, nombre, saludo });

 const { apellido: nuevoApellido } = crearPersona( 'Fernando', 'Herrera');
 console.log({ nuevoApellido });

 let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = (personaje) => {

//     console.log( personaje.nombre );
//     console.log( personaje.codeName );
//     console.log( personaje.vivo );
//     console.log( personaje.edad );
//     console.log( personaje.trajes );
// }


const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimePropiedades( tony );