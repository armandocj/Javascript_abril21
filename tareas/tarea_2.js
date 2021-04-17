// tarea 2: factorial de un numero N
console.info('### Tarea 2: Factorial de un numero\n')

var numeroFactorial = 5;
var factorial = 1;
for (var i = 1; i <= numeroFactorial; i++) {
    factorial *= i;
}

console.log('El factorial de: ' + numeroFactorial + ' es: ' + factorial);