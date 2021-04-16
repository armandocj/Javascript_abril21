// Imprimir en consola

console.log('Aqui se imprime una linea')

// imprimir multiples lineas

console.log('linea uno \n linea dos')

// como manejar un array en JavaScript

var myArray = [];
myArray[3] = 67
myArray[5] = 'lap'

console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
console.log(myArray[3])
console.log(myArray[4])
console.log(myArray[5])

console.log(myArray)

// agregar elementos

myArray.push(4)
myArray.push('Fer')
myArray.push(false)
myArray[3] = 'Zapato'

console.log(myArray)

// eliminamos un elemento

myArray.pop()

console.log(myArray)

console.log(myArray.push(2))
console.log(myArray)
console.log(myArray.pop())
console.log(myArray)
console.log(myArray.length)

// sacar un elemento al inicio del arreglo

myArray.shift();
console.log(myArray);
console.log(myArray.shift());

// agregar un elemento al incio del arreglo

myArray.unshift('Clase');
console.log(myArray);

// practica 1 - ejercicio: resolver esto: Martes 20

//[4,6,8,5,3]
//[3,5,8,6,4]

console.info('Voltear un arreglo')
var arreglo1 = [4,6,8,5,3];
var salida = [];
arreglo1.forEach(elemento => {
    salida.unshift(elemento)
})

 console.log(arreglo1)
 console.log(salida)