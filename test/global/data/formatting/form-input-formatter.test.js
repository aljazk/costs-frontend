import { expect } from 'chai';
import { FormInputFormatter } from '../../../../src/global/data/formatting/form-input-formatter.js';

describe('FormInputFormatter', () => {
  it('formatObject should format date for form input', () => {
    const input = {
      test: '2023-10-21T22:00:00.000Z',
    };
    const output = new FormInputFormatter().formatObject(input);
    expect(output.test).equal('2023-10-21');
  });
});
