import { TypeForm } from './type-form.js';
import { TypesRepository } from './types.repository.js';

export class AddTypeForm extends TypeForm {
  constructor(appendTo) {
    super(appendTo);
    this.typesRepository = new TypesRepository();
  }

  onSubmit(formObject) {
    return this.typesRepository.post(formObject);
  }
}
