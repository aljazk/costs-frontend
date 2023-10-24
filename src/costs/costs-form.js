import { Form } from '../global/displays/form.js';
import { TypesSelect } from '../types/types-select.js';

export class CostsForm extends Form {
  constructor(appendTo) {
    super('/costs', appendTo);
    this.createInputs();
  }

  createInputs() {
    this.addInput('value', 'number');
    this.dateInput = this.addInput('time', 'date');
    this.dateInput.value = new Date().toISOString().substring(0, 10);
    this.addCustomInput(new TypesSelect('typeIds', this.inputsHoldingDiv));
    // typesInput.appendChild();
  }

  fillForm(obj) {
    obj.typeIds = obj.types;
    super.fillForm(obj);
  }
}
