console.log('### Tarea 5: contar el numero de vocales de una cadena\n')
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

console.log(numeroDeVocales('yurishi'))
console.log(numeroDeVocales('paranguritirimicuaro'))