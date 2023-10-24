import { Router } from '../global/router.js';
import { AddCostForm } from './add-cost-form.js';
import { CostsView } from './costs.view.js';
import { EditCostForm } from './edit-cost-form.js';

export class CostsRouting extends Router {
  constructor() {
    super([
      {
        path: 'add',
        activate: (appendTo) => {
          new AddCostForm(appendTo.element);
        },
      },
      {
        path: 'edit',
        activate: (appendTo, path) => {
          const form = new EditCostForm(appendTo.element);
          form.setId(path);
        },
      },
      {
        path: '',
        activate: (appendTo) => {
          new CostsView(appendTo.element);
        },
      },
    ]);
  }
}
