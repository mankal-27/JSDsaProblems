const assert = require('assert');
const findGcd = require('../5_GCD_HCF')
describe('findGcd function', () => {
  it('should return GCD of two positive numbers with different GCD values', () => {
    assert.strictEqual(findGcd(20, 15), 5);
    assert.strictEqual(findGcd(48, 18), 6);
  });

  it('should return GCD of two positive numbers with same GCD values', () => {
    assert.strictEqual(findGcd(10, 10), 10);
    assert.strictEqual(findGcd(25, 25), 25);
  });

  it('should return GCD of zero and positive number', () => {
    assert.strictEqual(findGcd(0, 10), 10);
    assert.strictEqual(findGcd(0, 25), 25);
  });

  it('should return GCD of zero and zero', () => {
    assert.strictEqual(findGcd(0, 0), 0);
  });

  it('should return GCD of negative numbers', () => {
    assert.strictEqual(findGcd(-20, 15), 5);
    assert.strictEqual(findGcd(-48, -18), 6);
  });

  it('should return GCD of large numbers', () => {
    assert.strictEqual(findGcd(123456, 98765), 1);
    assert.strictEqual(findGcd(1000000, 2000000), 1000000);
  });
});