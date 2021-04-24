import {Selector} from 'testcafe';

class Page {
    constructor() {
        this.nameDev = Selector('#developer-name');
        this.checkboxRemoteTest = Selector('#remote-testing');
        this.radioButtonWindows = Selector('#windows');
        this.listInterface = Selector('#preferred-interface');
        this.elementJavaScriptApi = Selector('#preferred-interface > option:nth-child(2)');
        this.checkBoxTriedTestcafe = Selector('#tried-test-cafe');
        this.textareaComments = Selector('#comments')

        this.sliderObjeto = Selector('#slider');
        this.slider = {
            handle: Selector('.ui-slider-handle'),
            tick: Selector('.slider-value')
        };
    }
}

export default new Page();