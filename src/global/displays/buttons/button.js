import { Display } from '../display.js';

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
    this.span = document.createElement('span');
    this.button.appendChild(this.span);
    this.loadStyle(import.meta.url, 'button.css');
    this.setText(text);
    if (onClick) {
      this.addOnClickEvent(onClick);
    }
  }

  /**
   *
   * @param {string} text Text to display on button.
   */
  setText(text) {
    this.span.innerText = text;
  }

  addOnClickEvent(onClick) {
    this.button.addEventListener('click', onClick);
  }

  disable() {
    this.element.disabled = true;
  }

  enable() {
    this.element.disabled = false;
  }
}
