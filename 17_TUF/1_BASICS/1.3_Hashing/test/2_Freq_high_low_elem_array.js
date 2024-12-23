const assert = require('assert');
const frequencyHighLow = require('../2_Freq_high_low_elem_array');
describe('frequencyHighLow function', () => {
  it('should return [0, 0] for an empty array', () => {
    const result = frequencyHighLow([]);
    assert.deepStrictEqual(result, [0, 0]);
  });

  it('should return [1, 1] for an array with single element', () => {
    const result = frequencyHighLow([1]);
    assert.deepStrictEqual(result, [1, 1]);
  });

  it('should return [2, 2] for an array with multiple elements having same frequency', () => {
    const result = frequencyHighLow([1, 1, 2, 2]);
    assert.deepStrictEqual(result, [2, 2]);
  });

  it('should return [3, 1] for an array with multiple elements having different frequencies', () => {
    const result = frequencyHighLow([1, 2, 2, 3, 3, 3]);
    assert.deepStrictEqual(result, [3, 1]);
  });

  it('should return [3, 1] for an array with negative numbers', () => {
    const result = frequencyHighLow([-1, -2, -2, -3, -3, -3]);
    assert.deepStrictEqual(result, [3, 1]);
  });

  it('should return [3, 1] for an array with strings', () => {
    const result = frequencyHighLow(['a', 'b', 'b', 'c', 'c', 'c']);
    assert.deepStrictEqual(result, [3, 1]);
  });
});