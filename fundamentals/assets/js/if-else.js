let a = 5;

if ( a >= 10) {     //? espera un valor booleano exeptop algunos casos como undefined, null y una asignacion
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

// console.log('Fin de programa');

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes ....

console.log({ dia });

if ( dia === 0) {
    console.log('Domingo');
} else  if ( dia === 1){
    console.log('Lunes');
    
    // if ( dia === 1) {
    //     console.log('Lunes');
    // } else {
    //     console.log('No es Lunes ni Domingo');
    // }
} else if ( dia === 2) {
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo');
}

//? Sin usar if, else o switch. Unicamente objetos
dia = 5;    // 0:domingo, 1:lunes ....

diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}

console.log(diasLetras[dia]);

// dia de la semana