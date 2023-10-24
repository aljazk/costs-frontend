import { InputField } from '../input-field.js';

export class CheckboxInput extends InputField {
  constructor(name, value, appendTo) {
    super(name, 'checkbox', appendTo);
    this.loadStyle(import.meta.url, 'checkbox-input.css');
    this.input.value = value;
    this.element.classList.add('checkbox_input');
    this.element.addEventListener('click', ($event) => {
      if ($event.target === this.element)
        this.input.checked = !this.input.checked;
    });
  }
}
