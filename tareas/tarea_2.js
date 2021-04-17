// tarea 2: factorial de un numero N

var numeroFactorial = 5;
var factorial = 1;
for (var i = 1; i <= numeroFactorial; i++) {
    factorial *= i;
}

console.log('El factorial de: ' + numeroFactorial + ' es: ' + factorial);