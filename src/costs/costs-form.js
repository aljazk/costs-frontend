import { Form } from '../global/displays/form.js';

export class CostsForm extends Form {
  constructor(appendTo) {
    super(appendTo);
    this.createInputs();
  }

  createInputs() {
    this.addInput('value');
    this.dateInput = this.addInput('time', 'date');
    this.dateInput.value = new Date().toISOString().substring(0, 10);
  }
}
