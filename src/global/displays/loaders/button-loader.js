import { Loader } from './loader.js';

export class ButtonLoader extends Loader {
  constructor(appendTo, button) {
    super();
    this.loadStyle(import.meta.url, 'button-loader.css');
    this.element.classList.add('button_loader');
    this.button = button;
    this.replaceButtonContentWithSpinner(appendTo, button);
  }

  replaceButtonContentWithSpinner(appendTo, button) {
    const widthWithContent = button.element.getBoundingClientRect().width;
    this.oldContent = button.element.childNodes[0];
    console.log(widthWithContent);
    button.removeAllChildNodes();
    this.appendTo(appendTo);
    button.element.style.width = widthWithContent + 'px';
    button.disable();
  }

  done(contentToReplaceWith) {
    if (contentToReplaceWith) {
      super.done(contentToReplaceWith);
    } else {
      super.done(this.oldContent);
      this.button.enable();
    }
  }

  fail() {
    super.fail(this.oldContent).then(() => this.button.enable());
  }
}
