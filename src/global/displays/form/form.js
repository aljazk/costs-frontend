import { ErrorDisplay } from '../../../error/error-display.js';
import { FormInputFormatter } from '../../data/formatting/form-input-formatter.js';
import { InputField } from './input-fields/input-field.js';
import { Anchor } from '../buttons/anchor.js';
import { Button } from '../buttons/button.js';
import { Display } from '../display.js';

export class Form extends Display {
  constructor(
    backHref,
    appendTo,
    formInputsFormatter = new FormInputFormatter()
  ) {
    super('form', appendTo);
    this.formInputsFormatter = formInputsFormatter;
    this.form = this.element;
    this.form.classList.add('form');
    this.inputs = [];
    this.createInputsHoldingDiv();
    this.createButtons(backHref);
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

  createButtons(backHref) {
    this.createSubmitButton(backHref);
    this.createCancelButton(backHref);
  }

  createSubmitButton(backHref) {
    this.submitButton = new Button(
      'Submit',
      this.form,
      this.submit.bind(this, backHref)
    );
  }

  createCancelButton(backHref) {
    this.cancelButton = new Anchor('Cancel', backHref, this.form);
  }

  getInputs() {
    return this.inputs;
  }

  getFormObject() {
    const obj = {};
    for (const inputField of this.getInputs()) {
      const input = inputField.input;
      obj[input.name] = input.customValue ?? input.value;
    }
    return obj;
  }

  fillForm(obj) {
    const inputObj = this.formInputsFormatter.formatObject(obj);
    console.log('Filling form with:', inputObj);
    for (const inputField of this.getInputs()) {
      const inputName = inputField.input.name;
      if (inputField.setCustomValue) {
        inputField.setCustomValue(inputObj[inputName]);
      }
      inputField.input.value = inputObj[inputName];
    }
  }

  submit(backHref, $event) {
    $event.preventDefault();
    const formObject = this.getFormObject();
    console.log(formObject);
    this.onSubmit(formObject)
      .then(() => {
        anchorEvent(backHref)();
      })
      .catch((error) => {
        new ErrorDisplay(error, this.element);
      });
  }

  onSubmit() {
    console.warn('Method not implemented');
  }

  addInput(label, type = 'text') {
    const input = new InputField(label, type, this.inputsHoldingDiv);
    this.inputs.push(input);
    return input;
  }

  addCustomInput(customInput) {
    this.inputs.push(customInput);
  }
}
