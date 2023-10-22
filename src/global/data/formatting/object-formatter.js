import { DateFormatter } from './date-formatter.js';

export class ObjectFormatter {
  /**
   *
   * @param {Map<string, (value: any) => any} customKeyFormatterMap
   */
  constructor(customKeyFormatterMap = new Map()) {
    this.customKeyFormatterMap = customKeyFormatterMap;
  }

  /**
   *
   * @param {Array<any>} data
   * @returns Array of formatted data
   */
  formatArray(data) {
    const formattedData = [];
    for (const item of data) {
      formattedData.push(this.formatObject(item));
    }

    return formattedData;
  }

  formatObject(obj) {
    const formattedObject = { ...obj };
    for (const [key, value] of Object.entries(formattedObject)) {
      formattedObject[key] = this.format(key, value);
    }
    return formattedObject;
  }

  format(key, value) {
    if (this.customKeyFormatterMap.has(key)) {
      return this.customKeyFormatterMap.get(key)(value);
    }
    if (this.isDateFormat(value)) {
      return new DateFormatter().format(value);
    }
    return value;
  }

  isDateFormat(str) {
    const datePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
    return datePattern.test(str);
  }
}
