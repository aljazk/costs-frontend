import { Display } from '../../display.js';
import { Label } from './label.js';

export class InputField extends Display {
  static id = 0;
  constructor(name, type = 'text', appendTo) {
    super('div', appendTo);
    this.label = new Label(name, ++InputField.id, this.element);
    this.input = document.createElement('input');
    this.input.type = type;
    this.input.id = InputField.id;
    this.input.name = name;
    this.element.appendChild(this.input);
    this.element.classList.add('input_field');
    this.loadStyle(import.meta.url, 'input-field.css');
  }

  getInput() {
    return this.input;
  }
}
