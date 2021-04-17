// objetos y funciones

var animal = {
    tipo: 'Invertebrados',
    displayType: function () {
        console.log(this.tipo);
    }
}

var animal_4 = Object.create(animal);
var animal_56 = Object.create(animal);

animal_4.displayType();
animal_4.tipo = 'Pez'
animal_4.displayType();
animal_56.displayType();

animal_4.mamifero = true;
console.log(animal_4)
console.log(animal_56)