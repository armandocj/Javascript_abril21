const operaciones = require('./operaciones');

test('Validar hola mundo', () => {
    expect(operaciones.holaMundo()).toBe('¡Hola Mundo!')
});

// Tarea probar todas las funciones en el archivo operaciones

test('Validar la operacion suma', () => {
    expect(operaciones.suma(3, 7)).toEqual(10);
});

test('Validar la operacion resta', () => {
    expect(operaciones.resta(12, 7)).toBe(5);
});

test('Validar la operacion isNull', () => {
    expect(operaciones.isNull()).toBeNull();
});

test('Validar la operacion de multiplicar', () => {
    expect(operaciones.multiplicar(6,3)).toEqual(18);
    expect(operaciones.multiplicar(0.3, 0.6)).toEqual(0.18);
});

test('Validar la operacion createUser', () => {
    expect(operaciones.createUser()).toEqual({nombre: 'Armando', apellido: 'Celada'});
    expect(operaciones.createUser()).toHaveProperty('nombre');
    expect(operaciones.createUser()).toHaveProperty('apellido', 'Celada');
    expect(operaciones.createUser()).not.toHaveProperty('edad');
    expect(operaciones.createUser()).not.toHaveProperty(['nombre', 'apellido']);
});