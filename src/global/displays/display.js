import { FileDirectory } from '../file-directory.js';
import { CSSLoader } from './css-loader.js';

export class Display {
  /**
   *
   * @param {string} htmlTag HTML tag
   * @param {HTMLElement} appendTo parent
   */
  constructor(htmlTag, appendTo) {
    this.create(htmlTag);
    if (appendTo) {
      this.appendTo(appendTo);
    }
  }

  /**
   *
   * @param {string} metaUrl example: import.meta.url
   * @param {string} fileName exmaple: file.css
   */
  loadStyle(metaUrl, fileName) {
    try {
      new CSSLoader().load(new FileDirectory().get(metaUrl) + fileName);
    } catch (error) {
      if (error === 'Already loaded.') {
        // Its fine, just skip.
      } else {
        throw error;
      }
    }
  }

  create(htmlTag) {
    this.element = document.createElement(htmlTag);
  }

  reset() {
    this.removeAllChildNodes();
  }

  removeAllChildNodes() {
    this.removeAllChildElementsExcept([]);
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
