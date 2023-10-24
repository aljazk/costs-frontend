import { Display } from '../global/displays/display.js';
import { ErrorDisplay } from './error-display.js';

export class ErrorView extends Display {
  constructor(appendTo) {
    super('div', appendTo);
    new ErrorDisplay('404', this.element);
    this.loadStyle(import.meta.url, 'error.view.css');
    this.element.classList.add('error_holder');
  }
}
