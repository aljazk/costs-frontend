import { Display } from '../display.js';

export class PopUp extends Display {
  constructor(content) {
    super('div', document.body);
    this.loadStyle(import.meta.url, 'popup.css');

    this.createPopUp();
    if (content) {
      this.contentHolder.appendChild(content);
    }
  }

  createPopUp() {
    this.element.classList.add('popup');
    this.popUpBody = new Display('div', this.element);
    this.popUpBody.element.classList.add('popup_body');

    this.closeButton = new Display('span', this.popUpBody.element);
    this.closeButton.element.innerText = '×';
    this.closeButton.element.classList.add('popup_close_button');
    this.closeButton.element.addEventListener(
      'click',
      this.onClose.bind(this, undefined)
    );

    this.contentHolder = new Display('div', this.popUpBody.element);
    this.contentHolder.element.classList.add('popup_content_holder');
    this.buttonsHolder = new Display('div', this.popUpBody.element);
    this.buttonsHolder.element.classList.add('popup_buttons_holder');
  }

  onClose() {
    this.element.parentNode.removeChild(this.element);
  }
}
