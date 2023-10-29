import { Display } from '../display.js';
import { FailDisplay } from './fail-display.js';

export class Loader extends Display {
  constructor(appendTo) {
    super('div', appendTo);
    this.makeSpinner();
    this.element.classList.add('loader');
    this.loadStyle(import.meta.url, 'loader.css');
    this.isDone = false;
    this.failIconDisplayTimerInMilliseconds = 500;
  }

  makeSpinner() {
    new Display('div', this.element);
  }

  done(contentToReplaceWith) {
    const parent = this.element.parentElement;
    parent.removeChild(this.element);
    parent.appendChild(contentToReplaceWith);
    this.isDone = true;
  }

  fail(contentToReplaceWith) {
    const failSpan = new FailDisplay();
    const parent = this.element.parentElement;
    this.done(failSpan.element);
    return new Promise((resolve) => {
      setTimeout(() => {
        parent.removeChild(failSpan.element);
        parent.appendChild(contentToReplaceWith);
        resolve();
      }, this.failIconDisplayTimerInMilliseconds);
    });
  }
}
