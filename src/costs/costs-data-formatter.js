import { CurrencyFormatter } from '../global/data/formatting/currency-formatter.js';
import { ObjectFormatter } from '../global/data/formatting/object-formatter.js';
import { TypesListDisplay } from '../types/types-list-display.js';

export class CostsDataFormatter extends ObjectFormatter {
  constructor() {
    super();
    const currencyFormatter = new CurrencyFormatter();
    this.customKeyFormatterMap.set(
      'value',
      currencyFormatter.format.bind(currencyFormatter)
    );
    this.customKeyFormatterMap.set('types', (value) => {
      return new TypesListDisplay(value).element;
    });
  }
}
