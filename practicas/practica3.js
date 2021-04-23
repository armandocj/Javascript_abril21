// Consdicionantes

var txt;
var r = 'Presiona el boton'

if (r == 'Presiona el boton!') {
    txt = 'test pass'
} else {
    txt = 'test fail'
}

console.log(`Result: ${txt}`)

// otro ejercicio

 var num2 = 42;  if (num2 == 42) {console.log('El numero correcto es: ', num2)}

 var foo = 1
 var bar = 2
 var moo = 3
 if (foo < bar && moo > bar)
    console.log('foo is smaller thatn bar AND moo is larger than bar')

if (foo < bar || moo > bar)
    console.log('foo is smaller than bar OR moo is larger than bar')

// otro ejemplo

var boleano = false
if (!boleano)
    console.log('Test fail')
else
    console.log('Test pass')