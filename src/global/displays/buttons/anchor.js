import { Display } from '../display.js';

export class Anchor extends Display {
  constructor(text, href, appendTo) {
    super('a', appendTo);
    this.a = this.element;
    this.a.innerText = text;
    this.a.href = href;
    this.a.addEventListener('click', this.anchorEvent(href).bind(this));
    this.loadStyle(import.meta.url, 'button.css');
  }

  anchorEvent = (href) => ($event) => {
    $event?.preventDefault();
    window.mainRouter.activate(href);
  };

  navigate(href) {
    this.anchorEvent(href)();
  }
}
