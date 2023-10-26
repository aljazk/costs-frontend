import { Display } from '../../../display.js';
import { InputField } from '../input-field.js';
import { CheckboxInput } from './checkbox-input.js';

export class MultipleSelect extends InputField {
  static key = 'MultipleSelect';
  /**
   *
   * @param {string} name
   * @param {Array<{id, value}>} list
   * @param {HTMLElement} appendTo
   */
  constructor(name, list, appendTo) {
    super(name, 'hidden', appendTo);
    this.createMainInput();
    this.loadStyle(import.meta.url, 'multiple-select.css');
    this.element.classList.add('multiple_select');
    this.optionsHolder = new Display('div', this.element);
    this.optionsHolder.element.classList.add('options_holder');
    this.createCheckboxes(list);
  }

  /**
   *
   * @param {Array<{id, value}>} list
   * @returns
   */
  createCheckboxes(list) {
    if (!list) {
      return;
    }
    this.checkboxes = [];
    for (const item of list) {
      const checkbox = new CheckboxInput(
        item.value,
        item.id,
        this.optionsHolder.element
      );
      checkbox.input.setAttribute('MultipleSelect', true);
      checkbox.input.addEventListener('change', ($event) => {
        this.updateValue($event.target.value, $event.target.checked);
      });
      this.checkboxes.push(checkbox);
    }
  }

  createMainInput() {
    this.input.customValue = [];
    this.input.setCustomValue = this.setCustomValue.bind(this);
  }

  setCustomValue(value) {
    this.fillValues(value);
  }

  fillValues(values) {
    this.input.customValue = [];
    if (!this.checkboxes) {
      return;
    }
    for (const checkbox of this.checkboxes) {
      const checkboxInput = checkbox.input;
      const value = values?.find((value) => value.id == checkboxInput.value);
      if (value) {
        this.input.customValue.push(value.id);
        checkboxInput.checked = true;
      } else {
        checkboxInput.checked = false;
      }
    }
  }

  /**
   *
   * @param {string} inputName
   * @param {boolean} value
   */
  updateValue(inputName, value) {
    const array = this.input.customValue;
    if (value === true) {
      array.push(inputName);
    } else {
      array.splice(array.indexOf(inputName));
    }
  }
}
