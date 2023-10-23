import { expect } from 'chai';
import { DisplayFormatter } from '../../../../src/global/data/formatting/display-formatter.js';

describe('ObjectFormatter', () => {
  it('formatObject should format date for display', () => {
    const input = {
      test: '2023-10-21T22:00:00.000Z',
    };
    const output = new DisplayFormatter().formatObject(input);
    expect(output.test).equal('21.10.2023');
  });

  it('formatObject should not format other values', () => {
    const input = {
      test: '12',
    };
    const output = new DisplayFormatter().formatObject(input);
    expect(output.test).equal('12');
  });
});
