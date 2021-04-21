// Ejercicios parfa entrevistas
// 3 company: cada caracter se debe multimplicar por 3
//input: ty
//output: tttyyy

//input: 5567
//output: 555555666777

function threeCompany (cadena) {
    var n = cadena.length;
    var output = ''
/*
    for (var i = 0; i < n ; i++) {
        var letra = cadena.charAt(i);
        output += letra.repeat(3)
    };
    */

   Array.from(cadena).forEach(element => {
        output += element.repeat(3)
    });

    return output;
}

console.log(threeCompany('ty'))
console.log(threeCompany('5567'))
console.log(threeCompany('casa'))


// Contar el numero de vocales,,, input: yusishi: output: 3

function numeroDeVocales(cadena) {
    var contador = 0;
    Array.from(cadena).forEach(elemento => {
        if (elemento == 'a' || 'e' || 'i' || 'o' || 'u')
            contador++;
    })
    return contador;
}

console.log(numeroDeVocales('yurishi'))

// arreglo de numeros dividirlos de 3 en 3 y imprimir el menor,,,, input: [765 345 324], output: 532
// input: [87654] output: 64

// descubrir si una palabra es un palindromo,,, input: anna output: es un palindromo,,, input: casa output: no es palindromo