import { DialogPopUp } from '../popup/popup-types/dialog-popup.js';
import { Span } from '../span.js';
import { Button } from './button.js';

export class DeleteButton extends Button {
  constructor(text, deleteAction, content, appendTo) {
    super(text, appendTo);
    this.addOnClickEvent(this.onClick.bind(this, deleteAction, content));
  }

  /**
   *
   * @param {() => Promise<void>} deleteAction
   */
  onClick(deleteAction, content) {
    const popup = new DialogPopUp(content, deleteAction);
  }
}
