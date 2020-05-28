import { LightningElement, track } from 'lwc';

export default class LocalFile extends LightningElement {

    @track link_href = ''
    @track link_text = ''

    handleInput(event){
        
        const { value } = event.target
        
        this.link_href = `file:///${value}`
        this.link_text = `Access ${value}`
    }
}