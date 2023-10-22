import { FileDirectory } from '../file-directory.js';

export class Display {
  /**
   *
   * @param {string} htmlTag HTML tag
   * @param {HTMLElement} appendTo parent
   */
  constructor(htmlTag, appendTo) {
    this.name = htmlTag;
    this.create();
    if (appendTo) {
      this.appendTo(appendTo);
    }
  }

  /**
   *
   * @param {string} metaUrl import.meta.css
   * @param {string} fileName file.css
   */
  loadStyle(metaUrl, fileName) {
    const style = document.createElement('style');
    fetch(new FileDirectory().get(metaUrl) + fileName)
      .then((response) => response.text())
      .then((value) => {
        style.innerHTML = value;
      });
    this.element.appendChild(style);
  }

  create() {
    this.element = document.createElement(this.name);
  }

  /**
   * Removes all child nodes, except style tag
   */
  removeAllChildNodes() {
    this.removeAllChildElementsExcept(['style']);
  }

  /**
   *
   * @param {Array<string>} excludedTagNames List of all html tags to leave unremoved
   */
  removeAllChildElementsExcept(excludedTagNames) {
    const children = this.element.childNodes;
    for (let i = children.length - 1; i >= 0; i--) {
      const child = children[i];
      if (!excludedTagNames.includes(child.tagName.toLowerCase())) {
        this.element.removeChild(child);
      }
    }
  }

  /**
   *
   * @param {HTMLElement} item
   */
  appendTo(item) {
    item.appendChild(this.element);
  }

  isHidden() {
    return this.element.style.display === 'none';
  }

  toggle() {
    this.isHidden() ? this.show() : this.hide();
  }

  hide() {
    this.initialDisplay = this.element.style.display;
    this.element.style.display = 'none';
  }

  show() {
    this.element.style.display = this.initialDisplay;
  }
}
