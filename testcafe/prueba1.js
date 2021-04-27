import pagina from './pageObjectModel'

fixture('Mis primeras pruebas en el maravilloso Testcafe')
    .page('https://devexpress.github.io/testcafe/example/')

test('Probar que la pagina abra correctamente', async t  => {
    await t
});


test('Probar que se puede escribir el nombre del developer correctamente', async t  => {
    await t
    .typeText(pagina.nameDev, 'Armando Celada')
    .expect( pagina.nameDev.value ).eql('Valeria Celada')
});

test('Probar que se puede seleccionar el checkbox de Remote Testing', async t  => {
    await t
    .click(pagina.checkboxRemoteTest)
    .expect(pagina.checkboxRemoteTest.checked).ok();
});

test('Probar que se puede seleccionar el radio button de Windows', async t => {
    await t
    .click(pagina.radioButtonWindows)
    .expect(pagina.radioButtonWindows.checked).ok();
});

test('Probar que se puede seleccionar un elemento de una lista', async t => {
    await t
    .click(pagina.listInterface)
    .click(pagina.elementJavaScriptApi)
    .expect(pagina.elementJavaScriptApi.selected).ok();
});

test('Probar que se puede ingresar comentarios', async t => {
    await t
    .click(pagina.checkBoxTriedTestcafe)
    .typeText(pagina.textareaComments, 'Algunos comentarios', {speed: 0.1})
    .typeText(pagina.textareaComments, '\n Salto de linea')
    .typeText(pagina.textareaComments, 'Nuevo Texto', {replace: true, speed: 0.1})   
    .expect(pagina.textareaComments.value).eql('Nuevo Texto') 
});

test('Probar mover el slider', async t => {
    await t
    .click(pagina.checkBoxTriedTestcafe)
    .expect(pagina.checkBoxTriedTestcafe.checked).ok()
    .dragToElement(pagina.slider.handle, pagina.slider.tick.withText('9'), {speed: 0.1});

    console.log(await pagina.slider.handle.getAttribute('style').left)
    // TArea opcional: como validamos que si esta?
});

test('Probar posicion 7 u 8 u 9', async t => {
    await t
    .click(pagina.checkBoxTriedTestcafe)
    .expect(pagina.checkBoxTriedTestcafe.checked).ok()
    .dragToElement(pagina.sliderV2.handle, pagina.sliderV2.tick.withText('7'), {speed: 0.1})
    .expect(pagina.slider.handle.getAttribute('style')).eql(pagina.sliderV2.barPercentage7)

    console.log(await pagina.slider.handle.getAttribute('style'))
    // TArea opcional: como validamos que si esta?
});