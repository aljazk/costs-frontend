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

  navigate(href) {
    window.history.pushState({}, '', href);
    window.mainRouter.activate(window.location.pathname);
  }

  anchorEvent = (href) => ($event) => {
    $event?.preventDefault();
    this.navigate(href);
  };
}
