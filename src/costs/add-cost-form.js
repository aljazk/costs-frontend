import { CostsRepository } from './cost.repository.js';
import { CostsForm } from './costs-form.js';

export class AddCostForm extends CostsForm {
  constructor(appendTo) {
    super(appendTo);
    this.costsRepository = new CostsRepository();
  }

  onSubmit(formObject) {
    return this.costsRepository.post(formObject);
  }
}
