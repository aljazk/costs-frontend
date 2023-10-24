import { Display } from './display.js';

export class Loader extends Display {
  constructor(appendTo, size) {
    super('div', appendTo);
    this.makeSpinner();
    this.element.classList.add('loader');
    this.loadStyle(import.meta.url, 'loader.css');
    this.isDone = false;
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
}
