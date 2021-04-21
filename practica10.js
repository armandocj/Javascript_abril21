// Objetos

const Manager = {
    name: 'Guillermo',
    company: 'Telefonica',
    age: 32,
    job: 'Software Engineer'
}

let Manager2Level = {
    name: 'Guillermina',
    company: 'Telefonica',
    age: 30,
    job: 'Software Engineer'
}

var Empleado_private = {
    name: 'Paca',
    age: 25,
    job: 'Recepcion y donas'
}

const Interno = {
    name: 'Francisco',
    age: 21,
    job: 'Ir por el cafe a Starbucks y saca copias'
}

function sayHello(){
    console.log(`Hello... this is me: ${this.name}`)
}

function myAge(){
    console.log(`What's my age again? ${this.age} years old`)
}

Manager.sayHello = sayHello;
Interno.sayHello = sayHello;

Manager.myAge = myAge;
Interno.myAge = myAge;

Manager.salary = 30000000;
Manager2Level.horario = 'flexible'

console.log('Manager ', Manager)
console.log('Manager2Level ', Manager2Level)
console.log('Empleado_private', Empleado_private)

Manager.sayHello()
Manager.myAge()

//console.log('Manager ', Manager.mySalary())

console.log('Interno ', Interno)
Interno.sayHello()
Interno.myAge()