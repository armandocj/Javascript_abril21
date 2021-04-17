// tarea 2: factorial de un numnero N

var numeroInicial = 5;
var factorial = 1;
for (var i = 1; i <= numeroInicial; i++) {
    factorial *= i;
}

console.log('El factorial de: ' + numeroInicial + ' es: ' + factorial);