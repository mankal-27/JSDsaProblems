const assert = require('assert');
const armstrongNumber = require('../4_ArmStrong_Num.js');

describe('armstrongNumber function', () => {
  it('should return true for positive Armstrong numbers', () => {
    assert.strictEqual(armstrongNumber(153), true);
    assert.strictEqual(armstrongNumber(370), true);
    assert.strictEqual(armstrongNumber(1634), true);
  });

  it('should return false for negative numbers', () => {
    assert.strictEqual(armstrongNumber(-153), false);
    assert.strictEqual(armstrongNumber(-370), false);
    assert.strictEqual(armstrongNumber(-1634), false);
  });

  it('should return true for zero', () => {
    assert.strictEqual(armstrongNumber(0), true);
  });

  it('should return true for single digit numbers', () => {
    assert.strictEqual(armstrongNumber(1), true);
    assert.strictEqual(armstrongNumber(5), true);
    assert.strictEqual(armstrongNumber(9), true);
  });

  it('should return false for non-Armstrong numbers', () => {
    assert.strictEqual(armstrongNumber(123), false);
    assert.strictEqual(armstrongNumber(456), false);
    assert.strictEqual(armstrongNumber(789), false);
  });
});