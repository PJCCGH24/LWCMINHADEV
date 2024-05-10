import { LightningElement, track } from 'lwc';

export default class CssInLWC extends LightningElement {
    @track integrationVal = false;
    @track salesforceLWCVal = false;
    @track auraComponentVal = false;
    @track salesforceTriggerVal = false;

    selectedItemValue;

handleOnselect(event) {
    this.selectedItemValue = event.detail.value;

    if (this.selectedItemValue == 'integration'){
        this.integrationVal = true;
    }else{
        this.integrationVal = false;
    }
   
    if (this.selectedItemValue == 'salesforceLWC'){
        this.salesforceLWCVal = true;
    }else{
        this.salesforceLWCVal = false;
    }
    
    if (this.selectedItemValue == 'auraComponent'){
        this.auraComponentVal = true;
    }else{
        this.auraComponentVal = false;
    }
    if (this.selectedItemValue == 'salesforceTrigger'){
        this.salesforceTriggerVal = true;
    }else{
        this.salesforceTriggerVal = false;
    }

}
  
}