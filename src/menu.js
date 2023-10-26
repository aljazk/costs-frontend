import { Anchor } from './global/displays/buttons/anchor.js';
import { View } from './global/displays/view.js';

export class Menu extends View {
  constructor(appendTo) {
    super(appendTo);
    new Anchor('Costs', 'costs', appendTo);
    new Anchor('Types', 'types', appendTo);
    this.done();
  }
}
