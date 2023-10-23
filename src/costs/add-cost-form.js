import { CostsRepository } from './cost.repository.js';
import { CostsForm } from './costs-form.js';

export class AddCostForm extends CostsForm {
  constructor(appendTo, goBack) {
    super(appendTo, goBack);
    this.goBack = goBack;
    this.costsRepository = new CostsRepository();
  }

  onSubmit(formObject) {
    this.costsRepository.post(formObject).then(() => {
      this.goBack();
    });
  }
}
