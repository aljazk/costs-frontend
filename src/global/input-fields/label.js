import { Display } from '../displays/display.js';

export class Label extends Display {
  constructor(text, labelFor, appendTo) {
    super('label', appendTo);
    this.element.setAttribute('for', labelFor);
    this.element.innerText = text;
  }
}
