import { DisplayFormatter } from '../global/data/formatting/display-formatter.js';
import { Anchor } from '../global/displays/buttons/anchor.js';
import { Button } from '../global/displays/buttons/button.js';
import { DeleteButton } from '../global/displays/buttons/delete-button.js';
import { Display } from '../global/displays/display.js';
import { Span } from '../global/displays/span.js';
import { TypesRepository } from './types.repository.js';

export class TypesDataFormatter extends DisplayFormatter {
  constructor(updateTable) {
    super();
    this.typesRepository = new TypesRepository();
    this.updateTable = updateTable;
  }

  formatObject(obj) {
    const formattedObject = super.formatObject(obj);
    formattedObject.edit = new Anchor('Edit', '/types/edit/' + obj.id).element;
    formattedObject.delete = new DeleteButton(
      'Delete',
      () => {
        return new Promise((resolve, reject) => {
          this.typesRepository
            .delete(obj.id)
            .then(() => {
              console.log('then');
              this.updateTable().then(resolve).catch(reject);
            })
            .catch(reject);
        });
      },
      this.getTypeDeleteContent(obj)
    ).element;
    return formattedObject;
  }

  getTypeDeleteContent(obj) {
    const content = new Display('div');
    content.loadStyle(import.meta.url, 'types-data-formatter.css');
    content.element.classList.add('delete_type_message');
    new Span(
      'Are you sure you want to delete this cost type?',
      content.element
    );
    if (obj.usedOnCosts) {
      new Span(
        'Warning: this cost is used on ' + obj.usedOnCosts + ' costs.',
        content.element
      );
    }
    return content;
  }
}
