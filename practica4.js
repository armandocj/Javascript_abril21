// ciclos

var i = 0;

for(i ; i < 5 ; i++) {
    console.log(`Esto es el valor: ${i}`)
}
    
// ejercicio FOR
var arreglo = ['a', 'c']
for (var j = 0; j < arreglo.length ; j++) {
    console.log(`Este es el valor (j): ${j}`)
}

// while
var chelas = 99
while (chelas > 0) {
    console.log(`aun hay ${chelas} chelas en el refri, sigue la fiesta`)
    chelas-=1
}

// switch case
var rank = 'Sergeant';
switch(rank) {
    case 'Private':
    case 'Sergeant':
        console.log('You are not authorized')
        break;
    case 'Commander':
        console.log('Hello commander! what can I do for you today?')
        break;
    case 'Captain':
        console.log('Hello captain! I will do anything you wish.')
        break;
    default:
        console.log('I don\'t know what your rank is')
        break;
}

