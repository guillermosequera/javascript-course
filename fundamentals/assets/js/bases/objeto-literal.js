let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '1080, 90265',
        ubicacion: 'Malibu California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coors', personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo Traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';

console.log('Vivo', personaje[x]);
console.log('Ultima pelicula', personaje["ultima-pelicula"]);


delete personaje.edad;

personaje.casado = true;

const entryPars = Object.entries( personaje );
console.log( entryPars );

Object.freeze( personaje );

personaje.dinero = 100000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';


Object.freeze( personaje.direccion );
personaje.direccion.ubicacion = 'Miami';

console.log(personaje);


const props = Object.getOwnPropertyNames( personaje );
const values = Object.values( personaje );
console.log( props );
console.log( values );

