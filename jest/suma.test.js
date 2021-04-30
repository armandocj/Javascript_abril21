const suma = require('./suma');

test('Comprobar que la suma de 3 mas 1 es igual a 4', () => {
    expect(suma(3, 1)).toBe(4);
});


/// Tarea agregar 5 pruebas mas usando mas expect que noseanb TO BE

test('Comprobar la suma de dos numeros flotantes', () => {
    expect(suma(0.2, 0.3)).toBeCloseTo(0.5);
});

test('Comprobar que no regresa Null', () => {
    expect(suma(5,3)).not.toBeNull();
});

test('Comprobar que la funcion suma regrese numero con parametros numericos', () => {
    expect(suma(2,3)).not.toBeNaN();
});

test('Comprobar que la suma de 8 mas 4 es igual a 12', () => {
    expect(suma(8, 4)).toEqual(12);
});

test('Comprobar que la suma de dos numero negativos es menor que 0', () => {
    expect(suma(-5, -5)).toBeLessThan(0);
});