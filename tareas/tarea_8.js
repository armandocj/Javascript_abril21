//Tarea contar las vocales
console.log('### Funciones originales')
console.log('Function vocales')
function vocales(cadena){
    var n = cadena.length;
    var countVocal=0;
    var countConst=0;
    for(var i=0; i<n ; i++){
        var x = cadena.charAt(i).toLowerCase();
        if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u')
            countVocal++;
        else
            countConst++;
    }
    return [countVocal,countConst++];
};
console.log('Vocales y Consonantes ' + vocales('tyes'))
console.log('Vocales y Consonantes ' + vocales('YUIRSHI'))
console.log('Vocales y Consonantes ' + vocales('casa'))
console.log('')
console.log('Function letter_indexof')
function letter_indexof(cadena) {
    var n = cadena.length;
    var vocales = ["a","e","i","o","u"]; 
    var countVocal=0;
    var countConst=0;
    for(var i=0; i<n ; i++){
        if (vocales.indexOf(cadena.charAt(i).toLowerCase()) >= 0)
            countVocal++;
        else
            countConst++;
    }
    return [countVocal,countConst++];
}
console.log('Vocales y Consonantes ' + letter_indexof('tyes'))
console.log('Vocales y Consonantes ' + letter_indexof('YUIRSHI'))
console.log('Vocales y Consonantes ' + letter_indexof('casa'))

// ---------------------------------
console.log('')
console.log('### Funciones refactorizadas')
console.log('Function vocales2')
// Refactored
let vocales2 = cadena => {
    let countVocal=0;
    let countConst=0;
    cadena.split('').map(letra => {
        var x = letra.toLowerCase();
        if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u')
            countVocal++;
        else
            countConst++;
    })

    return [countVocal,countConst];
};

console.log('Vocales y Consonantes ' + vocales2('tyes'))
console.log('Vocales y Consonantes ' + vocales2('YUIRSHI'))
console.log('Vocales y Consonantes ' + vocales2('casa'))

console.log('')
console.log('Function letter_indexof2')
let letter_indexof2 = cadena => {
    let countVocal=0;
    let countConst=0;

    cadena.split('').map(letra => {
        if ('aeiou'.indexOf(letra.toLowerCase()) != -1 )
            countVocal++
        else
            countConst++;
    })

    return [countVocal,countConst];
}
console.log('Vocales y Consonantes ' + letter_indexof2('tyes'))
console.log('Vocales y Consonantes ' + letter_indexof2('YUIRSHI'))
console.log('Vocales y Consonantes ' + letter_indexof2('casa'))
