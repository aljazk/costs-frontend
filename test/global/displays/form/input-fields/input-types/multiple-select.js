import { expect } from 'chai';
import { MultipleSelect } from '../../../../../../src/global/displays/form/input-fields/input-types/multiple-select.js';

function createMockCheckboxes(values) {
  const mockCheckbox = [];
  for (const value of values) {
    mockCheckbox.push({
      input: {
        value: value,
        checked: false,
      },
    });
  }
  return mockCheckbox;
}

function mockMultipleSelect() {
  const input = {
    customValue: undefined,
  };
  const multipleSelect = {
    input: input,
    checkboxes: createMockCheckboxes(['1', '2', '3']),
  };
  multipleSelect.fillValues =
    MultipleSelect.prototype.fillValues.bind(multipleSelect);
  multipleSelect.updateValue =
    MultipleSelect.prototype.updateValue.bind(multipleSelect);
  return multipleSelect;
}

describe('MultipleSelect', () => {
  it('formatObject should only fill string', () => {
    const multipleSelect = mockMultipleSelect();
    multipleSelect.fillValues([{ id: 1 }, { id: 2 }, { id: 3 }]);
    expect(multipleSelect.input.customValue).deep.equals(['1', '2', '3']);
  });

  it('formatObject should only fill correct values', () => {
    const multipleSelect = mockMultipleSelect();
    multipleSelect.fillValues([{ id: 1 }, { id: 3 }]);
    expect(multipleSelect.input.customValue).deep.equals(['1', '3']);
  });

  it('formatObject should update values correctly 1', () => {
    const multipleSelect = mockMultipleSelect();
    multipleSelect.input.customValue = [];
    multipleSelect.updateValue('1', true);
    expect(multipleSelect.input.customValue).deep.equals(['1']);
    multipleSelect.updateValue('2', true);
    expect(multipleSelect.input.customValue).deep.equals(['1', '2']);
    multipleSelect.updateValue('2', false);
    expect(multipleSelect.input.customValue).deep.equals(['1']);
    multipleSelect.updateValue('1', false);
    expect(multipleSelect.input.customValue).deep.equals([]);
  });

  it('formatObject should update values correctly 2', () => {
    const multipleSelect = mockMultipleSelect();
    multipleSelect.input.customValue = ['1', '2'];
    multipleSelect.updateValue('1', true);
    expect(multipleSelect.input.customValue).deep.equals(['1', '2']);
    multipleSelect.updateValue('2', true);
    expect(multipleSelect.input.customValue).deep.equals(['1', '2']);
    multipleSelect.updateValue('2', false);
    expect(multipleSelect.input.customValue).deep.equals(['1']);
    multipleSelect.updateValue('2', true);
    expect(multipleSelect.input.customValue).deep.equals(['1', '2']);
    multipleSelect.updateValue('1', false);
    expect(multipleSelect.input.customValue).deep.equals(['2']);
    multipleSelect.updateValue('2', true);
    expect(multipleSelect.input.customValue).deep.equals(['2']);
    multipleSelect.updateValue('1', true);
    expect(multipleSelect.input.customValue).deep.equals(['2', '1']);
    multipleSelect.updateValue('3', true);
    expect(multipleSelect.input.customValue).deep.equals(['2', '1', '3']);
    multipleSelect.updateValue('3', false);
    expect(multipleSelect.input.customValue).deep.equals(['2', '1']);
  });
});
