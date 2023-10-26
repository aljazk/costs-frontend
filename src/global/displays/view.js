import { Display } from './display.js';
import { PageLoader } from './page-loader.js';

export class View extends Display {
  constructor(appendTo) {
    super('div');
    this.loader = new PageLoader(appendTo);
    this.container = this.element;
  }

  done() {
    this.loader.done(this.container);
  }
}
