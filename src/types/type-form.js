import { Form } from '../global/displays/form/form.js';

export class TypeForm extends Form {
  constructor(appendTo) {
    super('/types', appendTo);
    this.createInputs();
  }

  createInputs() {
    this.addInput('value', 'text');
    this.addInput('description', 'text');
  }
}
