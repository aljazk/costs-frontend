import { Display } from '../global/displays/display.js';

export class ErrorDisplay extends Display {
  /**
   *
   * @param {string} error
   * @param {HTMLElement} appendTo
   */
  constructor(error, appendTo) {
    super('span', appendTo);
    this.span = this.element;
    this.span.innerText = error;
    this.loadStyle(import.meta.url, 'error-display.css');
    this.span.classList.add('error_message');
  }
}
