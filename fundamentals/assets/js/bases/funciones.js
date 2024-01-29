function saludar( nombre ) {           //? console.log se parece a lo que es una funcion
    console.log([arguments]);           //? pero la diferencia es que es un metodo y la
    console.log('Hola ' + nombre);
    return;                             //? diferencia entre una funcion y un metodo es  
};                                      //? que el metodo se encuentra dentro de un objeto

                                    
                                    
//? todas las funciones 'tradicionales' entiendase por 'tradicionales' a las funciones que llevan explicitamente la palabra 'function'
//? tienen internamente implicito un objeto llamado '[arguments]'


saludar();


const saludar2 = function saludar( nombre ) {   //? Esto se conoce como funcion anonima ya que no tiene nombre la funcion y esta asignada a una constante
    console.log('Hola ' + nombre);      
};

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

saludar('Fernando', 40, true, 'Costa Rica');
// saludar2('Fernando');
saludarFlecha();
saludarFlecha2('Melissa');

function sumar( a, b) {
    return a + b;
}

const sumar2 = (a,b) => a +b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(sumar(2,2));
console.log(sumar2(2,2));
console.log(getAleatorio());
console.log(getAleatorio2());

