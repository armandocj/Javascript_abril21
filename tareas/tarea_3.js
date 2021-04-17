//TArea 3: Sera acaso que se pueda crear una funcion que ojeda crear objetos usando dos objetos
console.info('### Tarea 3: Crear objeto usando dos objetos\n')


function Car(marca, modelo, color, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
}

function cliente (nombre, edad, genero, tarjeta, status) {
    this.nombre = nombre;
    this.edad = edad
    this.genero = genero
    this.tarjeta = tarjeta // Visa o MasterCard
    this.status = status // Activo o Inactivo
}

function registro (vehiculo, owner) {
    this.vehiculo = vehiculo
    this.owner = owner
}

var Meche = new Car('Mercedes', 'Clase E', 'Negro', 2021)
var Ferrari = new Car('Ferrari', 'F40', 'Rojo', 1984)

var maria = new cliente('Maria', 20, 'Mujer', 'Visa', 'Activo')
let fernando = new cliente('Fernando', 30, 'Hombre', 'MasterCard', 'Inactivo')

var reg_56 = new registro(Meche, maria)
var reg_44 = new registro(Ferrari, fernando)

console.log(reg_56)
console.log('')
console.log(reg_44)
