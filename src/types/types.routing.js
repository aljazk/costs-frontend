import { Router } from '../global/router.js';
import { AddTypeForm } from './add-type-form.js';
import { EditTypeForm } from './edit-type-form.js';
import { TypesView } from './types.view.js';

export class TypesRouting extends Router {
  constructor() {
    super([
      {
        path: 'add',
        activate: (appendTo) => {
          new AddTypeForm(appendTo.element);
        },
      },
      {
        path: 'edit',
        activate: (appendTo, path) => {
          const form = new EditTypeForm(appendTo.element);
          form.setId(path);
        },
      },
      {
        path: '',
        activate: (appendTo) => {
          new TypesView(appendTo.element);
        },
      },
    ]);
  }
}
