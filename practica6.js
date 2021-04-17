var myCar = new Object();

myCar.make = 'Ford'
myCar.model = 'Mustang'
myCar.year = 1969

// otra forma de declarar el objeto myCar

var miCoche = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

console.log(myCar, miCoche)

myCar.year = 1970

console.log(myCar)

// tipos de propiedades en un objeto

var elObjeto = new Object(), 
    str = 'miString', 
    rand = Math.random(), 
    obj = new Object(),
    bol = true;

console.log(elObjeto, str, rand, obj, bol)

elObjeto.type = 'Sintaxis de puntos';
elObjeto['fecha de creación'] = 'Cadena con espacios';
elObjeto[str] = 'Usando variable de cadena';
elObjeto[rand] = 'Usando un numero aleatorio';
elObjeto[obj] = 'Inseption con objetos';
elObjeto[''] = 'Usando una propiedad vacia';
elObjeto[bol] = 'Usando una propiedad boleana';

console.log(elObjeto);
//iteracion con solo un for
for(var miembro in elObjeto){
    if (elObjeto.hasOwnProperty(miembro))
        console.log(`La propiedad ${miembro} del objeto es ${elObjeto[miembro]}`)
}

// iteracion con una funcion
function showProp ( obj, objName) {
    var result = ''
    for (var i in obj) {
        if (obj.hasOwnProperty(i)){
            result += `${objName}.${i} = ${obj[i]} \n`
            console.log(`El valor de i: ${i}`)
        }
    }
    return result;
}

console.log(showProp(elObjeto, 'elObjeto'))
console.log(showProp(myCar, 'myCar'))
console.log(showProp(miCoche, 'miCochecito'))

console.log(showProp(Object.keys(myCar)))
console.log(Object.getOwnPropertyNames(myCar))
console.log(Object.getOwnPropertyNames(elObjeto))
console.log(Object.getOwnPropertyDescriptor(myCar))