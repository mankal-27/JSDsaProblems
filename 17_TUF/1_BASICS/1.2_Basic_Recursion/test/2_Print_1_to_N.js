const sinon = require('sinon');
const assert = require('assert');
const print1toN = require('../2_Print_1_to_N');

describe('print1toN function', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('prints numbers from 1 to N for positive N', () => {
    print1toN(5);
    assert.strictEqual(consoleSpy.callCount, 5);
    assert.strictEqual(consoleSpy.getCall(0).args[0], 5);
    assert.strictEqual(consoleSpy.getCall(1).args[0], 4);
    assert.strictEqual(consoleSpy.getCall(2).args[0], 3);
    assert.strictEqual(consoleSpy.getCall(3).args[0], 2);
    assert.strictEqual(consoleSpy.getCall(4).args[0], 1);
  });

  it('does not print anything for N = 0', () => {
    print1toN(0);
    assert.strictEqual(consoleSpy.callCount, 0);
  });

  it('does not print anything for negative N', () => {
    print1toN(-5);
    assert.strictEqual(consoleSpy.callCount, 0);
  });

  it('prints 1 for N = 1', () => {
    print1toN(1);
    assert.strictEqual(consoleSpy.callCount, 1);
    assert.strictEqual(consoleSpy.getCall(0).args[0], 1);
  });
});