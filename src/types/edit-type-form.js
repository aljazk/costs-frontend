import { PageLoader } from '../global/displays/loaders/page-loader.js';
import { TypeForm } from './type-form.js';
import { TypesRepository } from './types.repository.js';

export class EditTypeForm extends TypeForm {
  constructor(appendTo) {
    super();
    this.typesRepository = new TypesRepository();
    this.loader = new PageLoader(appendTo);
  }

  setId(id) {
    this.id = id;
    this.typesRepository.get(id).then((value) => {
      this.loader.done(this.element);
      this.fillForm(value);
    });
  }

  onSubmit(formObject) {
    if (!this.id) {
      throw 'Id is not set, cannot edit form costs.';
    }
    return this.typesRepository.put(this.id, formObject);
  }
}
