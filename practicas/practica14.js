// funciones con flecha
// imprimir Hello World!
function helloWorld(nombre) {
    return 'Hola ' + nombre + '!';
}

console.log(helloWorld('Armando'))

const helloFlechaW = (name) => { 
    return 'Hola ' + name + '!';
}

console.log(helloFlechaW('Diana'));

// funcion suma

var suma = function(x,y) {
    return x + y;
}
const suma2a = (x,y) => {return x + y;};
const suma3a = (x,y) => x + y;

console.log(suma(2,3));
console.log(suma2a(2,3));
console.log(suma3a(2,3));

// funcion cuadrado

var cuadrado = function(x) {
    return x * x;
}
const cuadrado2a = (x) => {return x * x;};
const cuadrado3a = (x) => x * x;

console.log(cuadrado(2));
console.log(cuadrado2a(4));
console.log(cuadrado3a(5));

// funcion para manejar/imprimir lso caracteres de un array de palabras

var palabras = [
    'arbol', 'palabritas', 'Juan', 'Trabucles', 'Armando', 'Cecilia', 'Gabriela'
];

var contarLetras = palabras.map(s => s.length)
console.log(contarLetras);

// Tradicional
var contarLetras_trad = palabras.map( function (s) { return s.length; })


// funcion multiplicar numeros de un array
/*

function multiplicarNumeros(numero) {
    return numero * 2;

}
console.log(multiplicarNumeros(3))
*/
var numeros = [1,2,3,4,5]
const multiplicarConFlecha = numero1 => numero1 * 2
let multiplicarNumeros = numeros.map(multiplicarConFlecha);

console.log(multiplicarNumeros);

var multiplicaPorDos = () => 2 * 2;
console.log(multiplicaPorDos())