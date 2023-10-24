import { Loader } from './loader.js';

export class PageLoader extends Loader {
  constructor(appendTo) {
    super(appendTo);
    this.loadStyle(import.meta.url, 'page-loader.css');
    this.element.classList.add('page_loader');
  }
}
