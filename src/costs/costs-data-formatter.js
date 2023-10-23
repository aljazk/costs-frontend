import { CurrencyFormatter } from '../global/data/formatting/currency-formatter.js';
import { DisplayFormatter } from '../global/data/formatting/display-formatter.js';
import { Button } from '../global/displays/button.js';
import { TypesListDisplay } from '../types/types-list-display.js';

export class CostsDataFormatter extends DisplayFormatter {
  constructor(toggleAddCostsForm) {
    super();
    this.toggleAddCostsForm = toggleAddCostsForm;
    const currencyFormatter = new CurrencyFormatter();
    this.customKeyFormatterMap.set(
      'value',
      currencyFormatter.format.bind(currencyFormatter)
    );
    this.customKeyFormatterMap.set('types', (value) => {
      return new TypesListDisplay(value).element;
    });
  }

  formatObject(obj) {
    const formattedObject = super.formatObject(obj);
    formattedObject.edit = new Button('Edit', null, (value) => {
      this.onEditClicked(obj);
    }).element;
    console.log(formattedObject);
    return formattedObject;
  }

  onEditClicked(data) {
    console.log(data);
    this.toggleAddCostsForm(data);
  }
}
