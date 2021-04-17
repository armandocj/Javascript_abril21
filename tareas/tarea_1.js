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