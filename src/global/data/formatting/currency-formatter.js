export class CurrencyFormatter {
  constructor(currencySymbol = '€') {
    this.currencySymbol = currencySymbol;
  }

  format(decimal) {
    if (typeof decimal !== 'number') {
      throw new Error('Invalid input. Expected a number.');
    }

    // Format the decimal number with two decimal places and add the currency symbol
    const formattedValue = decimal.toFixed(2);

    return `${formattedValue} ${this.currencySymbol}`;
  }
}
