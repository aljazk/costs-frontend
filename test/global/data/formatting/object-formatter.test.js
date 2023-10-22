import { expect } from 'chai';
import { ObjectFormatter } from '../../../../src/global/data/formatting/object-formatter.js';

describe('ObjectFormatter', () => {
  it('formatObject should call action with all values', () => {
    const formatter = new ObjectFormatter();
    const calledWithKey = [];
    const calledWithValue = [];
    formatter.format = (key, value) => {
      calledWithKey.push(key);
      calledWithValue.push(value);
      return value;
    };
    const date = new Date();
    const inputObject = {
      a: 'valueA',
      b: 'valueB',
      c: 12,
      d: '12',
      e: date,
    };
    formatter.formatObject(inputObject);

    expect(calledWithKey).to.include('a');
    expect(calledWithKey).to.include('b');
    expect(calledWithKey).to.include('c');
    expect(calledWithKey).to.include('d');
    expect(calledWithKey).to.include('e');
    expect(calledWithValue).to.include('valueA');
    expect(calledWithValue).to.include('valueB');
    expect(calledWithValue).to.include(12);
    expect(calledWithValue).to.include('12');
    expect(calledWithValue).to.include(date);
  });

  it('should set action return value to value', () => {
    const formatter = new ObjectFormatter();
    formatter.format = (value) => {
      return '12';
    };
    const obj = { test: undefined };
    const returnObj = formatter.formatObject(obj);
    expect(returnObj.test).equal('12');
  });

  it('should not modify original object', () => {
    const formatter = new ObjectFormatter();
    formatter.format = (value) => {
      return 14;
    };
    const obj = { test: 12 };
    const returnObj = formatter.formatObject(obj);
    expect(returnObj.test).equal(14);
    expect(obj.test).equal(12);
  });

  it('should apply custom mapper to custom keys', () => {
    const customForamtterMap = new Map([['test', () => 14]]);
    const formatter = new ObjectFormatter(customForamtterMap);
    const obj = { test: 12 };
    const returnObj = formatter.formatObject(obj);
    expect(returnObj.test).equal(14);
  });
});
