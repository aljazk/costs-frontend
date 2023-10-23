import { BasicFormatter } from './basic-formatter.js';
import { DateFormatter } from './date-formatter.js';

export class DisplayFormatter extends BasicFormatter {
  format(key, value) {
    const output = super.format(key, value);
    if (this.isDateFormat(value)) {
      return new DateFormatter().formatForDisplay(value);
    }
    return output;
  }

  isDateFormat(str) {
    const datePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
    return datePattern.test(str);
  }
}
