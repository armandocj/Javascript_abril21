console.log('### Tarea 7: Descubrir si una palabra es un palindromo\n')

/* 
input: anna
output: Es un palindromo

input: casa
output: No es un palindromo

input: arribalabirra
output: Es un palindromo
*/

function esPalindromo(palabra) {
    var cadena = Array.from(palabra);
    var igual = true
    for(var i = 0, j = cadena.length - 1; i < j; i++, j--) {
            if (cadena[i] != cadena[j]) {
                igual = false;
                break;
            }
    }
    return igual;
}

function validaPalabra (palabra) {
    if (esPalindromo(palabra))
        console.log(`La palabra ${palabra} Si es un palindromo`)
    else
        console.log(`La palabra ${palabra} No es un palindromo`)
}

validaPalabra('anna')
validaPalabra('casa')
validaPalabra('arribalabirra')
