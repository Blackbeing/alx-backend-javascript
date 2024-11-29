const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 12 when a = 7 and b = 5', () => {
    assert.strictEqual(calculateNumber(7, 5), 12);
  });
  it('should return 14 when a = 7.5 and b = 6', () => {
    assert.strictEqual(calculateNumber(7.5, 6), 14);
  });
  it('should return 5 when a = 1.5 and b = 2.5', () => {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });
  it('should return 1 when a = -0.5 and b = 0.5', () => {
    assert.strictEqual(calculateNumber(-0.5, 0.5), 1);
  });
  it('should return 0 when a = -0.6 and b = 0.5', () => {
    assert.strictEqual(calculateNumber(-0.6, 0.5), 0);
  });
  it('should return -1 when a = -1.6 and b = 0.5', () => {
    assert.strictEqual(calculateNumber(-1.6, -0.5), -2);
  });
  it('should return 0 when a = 0 and b = 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

});
