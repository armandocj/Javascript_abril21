console.log('### Tarea 5: Contar el numero de vocales de una cadena\n')
/*
input: yurishi
output: 3
*/

function numeroDeVocales(cadena) {
    var contador = 0;
    Array.from(cadena).forEach(elemento => {
        if ('aeiou'.indexOf(elemento.toLowerCase()) != -1 )
            contador++;
    })
    return contador;
}

var cadena = 'yurishi'
console.log('El numero de vocales de la cadena ' + cadena + ' son ' + numeroDeVocales(cadena))
cadena = 'paranguritirimicuaro'
console.log('El numero de vocales de la cadena ' + cadena + ' son ' + numeroDeVocales(cadena))