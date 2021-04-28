const operaciones = require('./operaciones');

test('Validar hola mundo', () => {
    expect(operaciones.holaMundo()).toBe('¡Hola Mundo!')
});

// Tarea probar todas las funciones en el archivo operaciones