const sinon = require('sinon');
const assert = require('assert');
const printNto1 = require('../3_Print_N_To_1'); // assuming the function is in a file named printNto1.js

describe('printNto1 function', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('prints numbers from N to 1 for positive N', () => {
    printNto1(5);
    assert.strictEqual(consoleSpy.callCount, 5);
    assert.strictEqual(consoleSpy.getCall(0).args[0], 5);
    assert.strictEqual(consoleSpy.getCall(1).args[0], 4);
    assert.strictEqual(consoleSpy.getCall(2).args[0], 3);
    assert.strictEqual(consoleSpy.getCall(3).args[0], 2);
    assert.strictEqual(consoleSpy.getCall(4).args[0], 1);
  });

  it('does not print anything for N = 0', () => {
    printNto1(0);
    assert.strictEqual(consoleSpy.callCount, 0);
  });

  it('does not print anything for negative N', () => {
    printNto1(-5);
    assert.strictEqual(consoleSpy.callCount, 0);
  });

  it('prints 1 for N = 1', () => {
    printNto1(1);
    assert.strictEqual(consoleSpy.callCount, 1);
    assert.strictEqual(consoleSpy.getCall(0).args[0], 1);
  });
});