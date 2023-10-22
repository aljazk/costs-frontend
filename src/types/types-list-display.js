import { Display } from '../global/displays/display.js';
import { TypeDisplay } from './type-display.js';

export class TypesListDisplay extends Display {
  /**
   *
   * @param {Array<TypeModel>} data
   * @param {HTMLElement} appendTo
   */
  constructor(data, appendTo) {
    super('div', appendTo);
    this.mainDiv = this.element;
    this.setData(data);
  }

  /**
   *
   * @param {Array<TypeModel>} data
   */
  setData(data) {
    super.removeAllChildNodes();
    for (const type of data) {
      new TypeDisplay(type, this.mainDiv);
    }
  }
}
