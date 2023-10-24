import { PageLoader } from '../global/displays/page-loader.js';
import { CostsRepository } from './cost.repository.js';
import { CostsForm } from './costs-form.js';

export class EditCostForm extends CostsForm {
  constructor(appendTo) {
    super();
    this.costsRepository = new CostsRepository();
    this.loader = new PageLoader(appendTo);
  }

  setId(id) {
    this.id = id;
    this.costsRepository.get(id).then((value) => {
      this.loader.done(this.element);
      this.fillForm(value);
    });
  }

  onSubmit(formObject) {
    if (!this.id) {
      throw 'Id is not set, cannot edit form costs.';
    }
    return this.costsRepository.put(this.id, formObject);
  }
}
