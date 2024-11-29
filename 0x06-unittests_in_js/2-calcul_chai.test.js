const calculateNumber = require('./1-calcul');
const { expect } = require('chai');

describe('calculateNumber', () => {
  it('should return sum when type is SUM', () => {
    expect(calculateNumber('SUM', 1.4, 3.7)).to.equal(5); // 1 + 4
    expect(calculateNumber('SUM', 2.5, 2.5)).to.equal(6); // 3 + 3
  });

  it('should return subtraction when type is SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 5.6, 3.1)).to.equal(3); // 6 - 3
    expect(calculateNumber('SUBTRACT', 2.5, 6.5)).to.equal(-4); // 3 - 7
  });

  it('should return division when type is DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2); // 8 / 2
  });

  it('should return Error on division by zero', () => {
    expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 5, 0.2)).to.equal('Error'); // rounding makes it 0
  });
});
