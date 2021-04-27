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
            tick: Selector('.slider-value'),
        };
        this.sliderV2 = {
            handle: Selector('.ui-slider-handle'),
            tick: Selector('.slider-value'),
            barPercentage7: 'left: 66.6667%;',
            barPercentage8: 'left: 77.7778%;',
            barPercentage9: 'left: 88.8889%;', 
        }
    }
}

export default new Page();