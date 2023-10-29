import { Display } from './display.js';

export class Span extends Display {
  constructor(text, appendTo) {
    super('span', appendTo);
    this.element.innerText = text;
  }
}
