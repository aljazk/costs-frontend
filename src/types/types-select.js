import { ErrorDisplay } from '../error/error-display.js';
import { Loader } from '../global/displays/loader.js';
import { MultipleSelect } from '../global/input-fields/input-types/multiple-select.js';
import { TypesRepository } from './types.repository.js';

export class TypesSelect extends MultipleSelect {
  constructor(name, appendTo) {
    super(name);
    this.loader = new Loader(appendTo);
    this.loadTypes();
  }

  loadTypes() {
    const typesRepository = new TypesRepository();
    typesRepository
      .getAll()
      .then((result) => {
        this.createCheckboxes(result);
        this.loader.done(this.element);
      })
      .catch((error) => {
        this.loader.done(new ErrorDisplay(error).element);
      });
  }

  // If checkboxes didnt load yet, only call fill values after loading was done
  setCustomValue(value) {
    if (!this.loader.isDone) {
      const oldDone = this.loader.done.bind(this.loader);
      this.loader.done = (contentToReplaceWith) => {
        oldDone(contentToReplaceWith);
        super.fillValues(value);
      };
    } else {
      super.fillValues(value);
    }
  }
}
