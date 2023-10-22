import { Button } from './button.js';
import { Display } from './display.js';

let id = 0;
export class Form extends Display {
  constructor(appendTo) {
    super('form', appendTo);
    this.form = this.element;
    this.form.classList.add('form');
    this.createInputsHoldingDiv();
    this.createSubmitButton();
    this.loadStyle(import.meta.url, 'form.css');
  }

  createInputsHoldingDiv() {
    this.inputsHoldingDiv = document.createElement('div');
    this.inputsHoldingDiv.style.cssText += `
        display: flex;
        flex-direction: column;
      `;
    this.form.appendChild(this.inputsHoldingDiv);
  }

  createSubmitButton() {
    this.submitButton = new Button('Submit', this.form, this.submit.bind(this));
  }

  getInputs() {
    return this.form.getElementsByTagName('input');
  }

  getFormObject() {
    const obj = {};
    for (const input of this.getInputs()) {
      obj[input.name] = input.value;
    }
    return obj;
  }

  submit($event) {
    $event.preventDefault();
    const formObject = this.getFormObject();
    console.log(formObject);
    this.onSubmit(formObject);
  }

  onSubmit() {
    console.warn('Method not implemented');
  }

  addInput(label, type = 'text') {
    const labelEle = document.createElement('label');
    labelEle.innerText = label;
    labelEle.for = id++;
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = label;
    this.inputsHoldingDiv.appendChild(labelEle);
    this.inputsHoldingDiv.appendChild(input);
    return input;
  }
}
