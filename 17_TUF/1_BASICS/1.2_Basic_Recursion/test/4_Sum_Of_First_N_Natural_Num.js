const assert = require('assert');
const sumOfFirstNNaturalNum = require('../4_Sum_Of_First_N_Natural_Num');
describe('sumOfFirstNNaturalNum function', () => {
  it('returns the correct sum for positive N', () => {
    assert.strictEqual(sumOfFirstNNaturalNum(5), 15);
    assert.strictEqual(sumOfFirstNNaturalNum(10), 55);
  });

  it('returns 0 for N = 0', () => {
    assert.strictEqual(sumOfFirstNNaturalNum(0), 0);
  });

  it('returns 0 for negative N', () => {
    assert.strictEqual(sumOfFirstNNaturalNum(-5), 0);
  });

  it('returns N for N = 1', () => {
    assert.strictEqual(sumOfFirstNNaturalNum(1), 1);
  });
});