// funciones de fecha

const arrayl1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

const moduloCuatro = arrayl1.filter(n => n % 4 === 0);

console.log(moduloCuatro)

// nota: toLowerCase() includes() toUpperCase()
// 
console.log(0 == false)
console.log(0 === false)

// Ejercicio buscar el numero menor y mayor de algunos numeros

var x = 21, y = -5, z = 3;

console.log(Math.min(z,y))
console.log(Math.min(z,y,x))
console.log(Math.max(x,y))
console.log(Math.max(x,y,z))

var arreglito = [2,6,3,77,45,3]
var minimoDelArreglo = arreglo => Math.min(...arreglo); 
console.log(minimoDelArreglo(arreglito));

console.log(Math.min.apply(null,arreglito));

//////

console.log(Math.max(...[4,5,7,9,1]))
console.log(Math.min(...[4,5,7,9,1]))

//ECMAScript6 new spread operator arrays

// funcion separar un array

var index = arreglito.length;
var primerArray = arreglito.slice(0, index / 2);
var segundoArray = arreglito.slice(index / 2, index)
console.log(arreglito)
console.log(primerArray)
console.log(segundoArray)

var alumnosDeHoy = ['Armando', 'Cecilia', 'Cordelia', 'Gaby', 'Manuel', 'Josue', 'JC', 'Mau'];

var divideyVence = (lista , howMany) => {
    let arrayFinal = []
    input = lista.slice(0);
    while(input[0]){
        arrayFinal.push(input.splice(0,howMany));
    }

    return arrayFinal;
}

console.log(divideyVence(alumnosDeHoy,2))
console.log(divideyVence(alumnosDeHoy,3))

// 