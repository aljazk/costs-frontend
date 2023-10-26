import { Router } from '../global/router.js';
import { TypesView } from './types.view.js';

export class TypesRouting extends Router {
  constructor() {
    super([
      {
        path: '',
        activate: (appendTo) => {
          new TypesView(appendTo.element);
        },
      },
    ]);
  }
}
