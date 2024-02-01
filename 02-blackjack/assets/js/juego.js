/**
 * 2C = Two of Clubs (Treboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'K', 'Q', 'J'];

// Esta funcion crea un nuevo mazo de cartas
const crearDeck = () => {

    for( let i = 2; i <= 10; i++) {
        for( let tipo of tipos) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos) {
        for( let especial of especiales) {
            deck.push( especial + tipo);
        }
    }

    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;

}

crearDeck();


// Esta funcion me permite tomar una carta
const pedirCarta = () => {

    if ( deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();


    console.log(deck);
    console.log(carta);
    return carta;
}


// pedirCarta();
const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10     // simplificado
        :   valor * 1;
    // let puntos = 0;
    // console.log({valor});
    // if( isNaN(valor) ) {

    //     puntos = ( valor === 'A' ) ? 11 : 10;

    // } else {
    //     puntos = valor * 1;
    // }

    // console.log(puntos);

}

const valor = valorCarta( pedirCarta() );
console.log({ valor });