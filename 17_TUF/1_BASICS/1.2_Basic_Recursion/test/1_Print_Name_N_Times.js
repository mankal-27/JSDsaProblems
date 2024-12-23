const sinon = require('sinon');
const assert = require('assert');
const callMe = require('../1_Print_Name_N_Times');
describe('callMe function', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('logs "Hello" when N is greater than M', () => {
    callMe(5, 3);
    assert.strictEqual(consoleSpy.callCount, 3);
    assert.strictEqual(consoleSpy.getCall(0).args[0], 'Hello');
    assert.strictEqual(consoleSpy.getCall(1).args[0], 'Hello');
    assert.strictEqual(consoleSpy.getCall(2).args[0], 'Hello');
  });

  it('does not log anything when N is less than or equal to M', () => {
    callMe(3, 5);
    assert.strictEqual(consoleSpy.callCount, 0);
  });

  it('logs "Hello" the correct number of times when N is greater than M', () => {
    callMe(10, 5);
    assert.strictEqual(consoleSpy.callCount, 6);
  });

  it('handles negative numbers', () => {
    callMe(-5, -3);
    assert.strictEqual(consoleSpy.callCount, 3);
    assert.strictEqual(consoleSpy.getCall(0).args[0], 'Hello');
    assert.strictEqual(consoleSpy.getCall(1).args[0], 'Hello');
    assert.strictEqual(consoleSpy.getCall(2).args[0], 'Hello');
  });

  it('handles zero', () => {
    callMe(0, 5);
    assert.strictEqual(consoleSpy.callCount, 0);
  });
});