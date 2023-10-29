import { Display } from '../display.js';
import { Span } from '../span.js';

export class FailDisplay extends Display {
  constructor(appendTo) {
    super('div', appendTo);
    this.loadStyle(import.meta.url, 'fail-display.css');
    this.element.classList.add('fail_display');
    this.createX();
  }

  createX() {
    new Span('×', this.element);
  }
}
