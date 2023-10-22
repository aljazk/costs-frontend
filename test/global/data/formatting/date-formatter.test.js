import { expect } from 'chai';
import { DateFormatter } from '../../../../src/global/data/formatting/date-formatter.js';

describe('DateFormatter', () => {
  it('should format new Date()', () => {
    const formatter = new DateFormatter();

    const date = new Date('2023-10-22');
    const formatedDate = formatter.format(date);

    expect(formatedDate).equal('22.10.2023');
  });

  it('should format backend date format', () => {
    const formatter = new DateFormatter();

    const date = '2023-10-20T19:19:02.000Z';
    const formatedDate = formatter.format(date);

    expect(formatedDate).equal('20.10.2023');
  });
});
