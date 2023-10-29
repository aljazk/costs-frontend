import { Button } from '../../buttons/button.js';
import { ButtonLoader } from '../../loaders/button-loader.js';
import { PopUp } from '../popup.js';

export class DialogPopUp extends PopUp {
  constructor(question, onConfirm, onCancel) {
    //  TODO: replace with span
    super();
    question.appendTo(this.contentHolder.element);
    this.createButtons(onConfirm, onCancel);
  }

  createButtons(onConfirm, onCancel) {
    const confirmButton = new Button('Confirm', this.buttonsHolder.element);
    confirmButton.addOnClickEvent(
      this.onClose.bind(this, onConfirm, confirmButton)
    );
    const closeButton = new Button('Cancel', this.buttonsHolder.element);
    closeButton.addOnClickEvent(this.onClose.bind(this, onCancel, closeButton));
  }

  onClose(action, item) {
    console.log(action, item);
    if (action) {
      const loader = new ButtonLoader(item.element, item);
      const actionRet = action();
      console.log(actionRet);
      actionRet
        .then(() => {
          loader.done();
          super.onClose();
        })
        .catch(() => {
          loader.fail();
        });
    } else {
      super.onClose();
    }
  }
}
