import { Display } from '../global/displays/display.js';

export class TypeDisplay extends Display {
  /**
   *
   * @param {TypeModel} data
   * @param {HTMLElement} appendTo
   */
  constructor(data, appendTo) {
    super('span', appendTo);
    this.span = this.element;
    this.setData(data);
    this.loadStyle(import.meta.url, 'type-display.css');
    this.span.classList.add('type_tag');
  }

  setData(data) {
    super.reset();
    this.span.innerText = data.value;
    if (data.description) {
      this.span.setAttribute('customTitle', data.description);
      this.span.classList.add('custom_title');
    }
  }

  reset() {
    super.reset();
    this.span.removeAttribute('customTitle');
    this.span.classList.remove('custom_title');
  }
}
