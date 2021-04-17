// TArea 4: Crear objetos casa, dentro objetos personas
console.info('### Tarea 4: Crear objetos casa y que tenga dentro objetos personas \n')

function persona (nombre, genero) {
    this.nombre = nombre
    this.genero = genero
}

function casa (calle, numero, personas) {
    this.calle = calle
    this.numero = numero
    this.personas = personas
}

var familia = {}
familia.papa = new persona('Armando', 'Hombre')
familia['mama'] = new persona('Diana', 'Mujer')
familia.hija = new persona('Valeria', 'Mujer')

var miCasa = new casa('Bronce', 49, familia);

console.log(miCasa)



