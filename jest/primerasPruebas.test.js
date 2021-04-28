test('Validar el hola mundo', () => {
    const hola = 'Hola mundito!';
    expect(hola).toBe('Hola mundito!');
});

test('Validando objetos', () => {
    const objeto1 = {
        uno: 1
    };
    objeto1['dos'] = 2
    expect(objeto1).toEqual({uno: 1, dos: 2});
});

test('Validar con un for', () => {
    for ( var i = 0; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
            expect(i + j).not.toBe(0);
        }
    }
});

test('Validar una suma y el resultado sea mayor o igual que', () => {
    var resultado = 3 + 9;
    expect(resultado).toBe(12);
});

test('Validar una resta que sea igual y no igual', () => {
    const resultado = 8 - 4;
    expect(resultado).toEqual(4);
    expect(resultado).not.toEqual(5);
});

test('Validar mayor que y mayor o igual que', () => {
    const resultado = 3 * 4;
    expect(resultado).toBeGreaterThan(10);
    expect(resultado).toBeGreaterThanOrEqual(12);
});

test('Validar menor que y menor o igual que', () => {
    const resultado = 6 - 4;
    expect(resultado).toBeLessThan(3);
    expect(resultado).toBeLessThanOrEqual(2);
});

test('Validar numeros flotantes', () => {
    const resultado = 0.1 + 0.3;
    expect(resultado).toBeCloseTo(0.4);
});

test('Validar que esta cadena no contiene una I', () => {
    expect('team').not.toMatch(/I/);
});

test('Validar que coincide y contiene la palabra stop', () => {
    expect('Christopher').toMatch(/stop/);
    expect('Christopher').toContain('stop');
});


const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'beer',
    ];

test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(shoppingList).not.toContain('cereal');
    expect(new Set(shoppingList)).toContain('beer');
});

test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).not.toContain('Yuri');
});

test('Validar un valor nulo', () => {
    const n = null;
    const z = 0
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
    
    expect(z).not.toBeNull();
    expect(z).not.toBeUndefined();
});