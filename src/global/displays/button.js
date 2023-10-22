import { Display } from './display.js';

export class Button extends Display {
  /**
   *
   * @param {string} text Text displayed on  the button
   * @param {HTMLElement} appendTo Parent
   * @param {($event) => void} onClick Function to run on click
   */
  constructor(text, appendTo, onClick) {
    super('button', appendTo);
    this.button = this.element;
    this.setText(text);
    if (onClick) {
      this.button.addEventListener('click', onClick);
    }
  }

  /**
   *
   * @param {string} text Text to display on button.
   */
  setText(text) {
    this.button.innerText = text;
  }

  addOnClickEvent(onClick) {
    this.button.addEventListener('click', onClick);
  }
}
