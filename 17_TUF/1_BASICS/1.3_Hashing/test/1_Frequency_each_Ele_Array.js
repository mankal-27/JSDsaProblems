const assert = require('assert');
const frequencyOfEachElement = require('../1_Frequency_each_Ele_Array');

describe('frequencyOfEachElement function', () => {
  it('should return an empty object for an empty array', () => {
    const result = frequencyOfEachElement([]);
    assert.deepStrictEqual(result, {});
  });

  it('should return an object with the frequencies of each element in the array', () => {
    const result = frequencyOfEachElement([1, 2, 3, 2, 1, 2, 3]);
    assert.deepStrictEqual(result, { 1: 2, 2: 3, 3: 2 });
  });

  it('should return an object with the frequencies of each element in the array, even if the array contains duplicate elements', () => {
    const result = frequencyOfEachElement([1, 2, 2, 3, 3, 3]);
    assert.deepStrictEqual(result, { 1: 1, 2: 2, 3: 3 });
  });

  it('should return an object with the frequencies of each element in the array, even if the array contains negative numbers', () => {
    const result = frequencyOfEachElement([-1, -2, -2, -3, -3, -3]);
    assert.deepStrictEqual(result, { '-1': 1, '-2': 2, '-3': 3 });
  });

  it('should return an object with the frequencies of each element in the array, even if the array contains strings', () => {
    const result = frequencyOfEachElement(['a', 'b', 'b', 'c', 'c', 'c']);
    assert.deepStrictEqual(result, { 'a': 1, 'b': 2, 'c': 3 });
  });

  it('should return an object with the frequencies of each element in the array, even if the array contains objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    const result = frequencyOfEachElement([obj1, obj2, obj2, obj3, obj3, obj3]);
    assert.deepStrictEqual(result, { '[object Object]': 6 });
  });

  it('should return an object with the frequencies of each element in the array, even if the array contains arrays', () => {
    const result = frequencyOfEachElement([[1], [2], [2], [3], [3], [3]]);
    assert.deepStrictEqual(result, { '1': 1, '2': 2, '3': 3 });
  });

  it('should return an object with the frequencies of each element in the array, even if the array contains null and undefined', () => {
    const result = frequencyOfEachElement([null, undefined, null, undefined, null, undefined]);
    assert.deepStrictEqual(result, { null: 3, undefined: 3 });
  });
});