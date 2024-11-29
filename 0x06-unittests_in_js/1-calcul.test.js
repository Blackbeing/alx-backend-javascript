const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  it('should return sum when type is SUM', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 3.7), 5); // 1 + 4
    assert.strictEqual(calculateNumber('SUM', 2.5, 2.5), 6); // 3 + 3

  });

  it('should return subtraction when type is SUBTRACT', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.6, 3.1), 3); // 6 - 3
    assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 6.5), -4); // 3 - 7
  });

  it('should return division when type is DIVIDE', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2); // 8 / 2
  });
  //
  it('should return Error on division by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 5, 0.2),'Error'); // rounding makes it 0
  });
});
