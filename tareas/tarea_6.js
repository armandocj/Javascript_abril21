console.log('Tarea 6 : Arreglo de numeros, dividirlos de 3 en 3, imprimir el menor de cada tercio\n')

/* 
input: [765345324], output: 532
input: [87654] output: 64
*/

function menorEnArreglo (arreglo) {
    var menor = -1;
    arreglo.forEach(element => {
        if ((menor == -1) || (menor > element)){
            menor = element;
        } 
    });
    return menor;
}

function separaEnTres (arreglo) {
    var output = [];
    var arregloCorto = [];

    arreglo.forEach((element, index, array) => {
        arregloCorto.push(element);
        if (arregloCorto.length == 3 || index == (array.length - 1)){
            output.push(menorEnArreglo(arregloCorto));
            arregloCorto = [];
        }
    })

    return output
}

var entrada = [7,6,5,3,4,5,3,2,4]
console.log(`El menor de cada tercio del arreglo de números ${entrada} es ${separaEnTres(entrada)}`)

entrada = [8,7,6,5,4]
console.log(`El menor de cada tercio del arreglo de números ${entrada} es ${separaEnTres(entrada)}`)