// objetos & funciones

function Car(marca, modelo, color, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
}

console.log(Car);

var Seat = new Car('Seat', 'Leon', 'Blanco', 2021);
var Mazda = new Car('Mazda', 3, 'Negro', 2019);
var Meche = new Car('Mercedes', 'Clase E', 'Negro', 2021)
var Ferrari = new Car('Ferrari', 'F40', 'Rojo', 1984)

console.log(Seat, Mazda, Meche, Ferrari);

function cliente (nombre, edad, genero, tarjeta, status) {
    this.nombre = nombre;
    this.edad = edad
    this.genero = genero
    this.tarjeta = tarjeta // Visa o MasterCard
    this.status = status // Activo o Inactivo
}

var maria = new cliente('Maria', 20, 'Mujer', 'Visa', 'Activo')
let fernando = new cliente('Fernando', 30, 'Hombre', 'MasterCard', 'Inactivo')

function registro (marca, modelo, anio, owner) {
    this.marca = marca
    this.modelo = modelo
    this.anio = anio
    this.owner = owner
}

var reg_56 = new registro('Seat', 'Cupra', 2020, maria)

console.log(reg_56)
