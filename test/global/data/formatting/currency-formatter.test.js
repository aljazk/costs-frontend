import { expect } from 'chai';
import { CurrencyFormatter } from '../../../../src/global/data/formatting/currency-formatter.js';

describe('DateFormatter', () => {
  it('should format decimal to currency display', () => {
    const formatter = new CurrencyFormatter();

    const decimal = 12.5;
    const formatterValue = formatter.format(decimal);

    expect(formatterValue).equal('12.50 €');
  });

  it('should format integer to currency display', () => {
    const formatter = new CurrencyFormatter();

    const decimal = 12;
    const formatterValue = formatter.format(decimal);

    expect(formatterValue).equal('12.00 €');
  });
});
