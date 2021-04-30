const suma = require('./suma');

test('Comprobar que la suma de 3 mas 1 es igual a 4', () => {
    expect(suma(3, 1)).toBe(4);
});


/// Tarea agregar 5 pruebas mas usando mas expect que noseanb TO BE

test('Comprobar la suma de dos numeros flotantes', () => {
    expect(suma(0.2, 0.3)).toBeCloseTo(0.5);
});

test('Comprobar los parametros con los que es llamada la funcion suma', () => {
    expect(jest.fn(suma)).toBeCalledWith(expect.anything(), expect.anything());
});
