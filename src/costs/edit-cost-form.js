import { CostsRepository } from './cost.repository.js';
import { CostsForm } from './costs-form.js';

export class EditCostForm extends CostsForm {
  constructor(appendTo, goBack) {
    super(appendTo, goBack);
    this.goBack = goBack;
    this.costsRepository = new CostsRepository();
  }

  setId(id) {
    this.id = id;
  }

  onSubmit(formObject) {
    if (!this.id) {
      throw 'Id is not set, cannot edit form costs.';
    }
    this.costsRepository.put(this.id, formObject).then(() => {
      this.goBack();
    });
  }
}
