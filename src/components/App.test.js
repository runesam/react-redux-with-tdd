import assert from 'assert';

const expect = require('expect.js');

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.be(true);
  });
});

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
  describe('#isArray()', () => {
    it('should return true when the value is an array', () => {
      assert.equal(true, Array.isArray([1, 2, 3]));
    });
  });
  describe('#isArray()', () => {
    it('should return false when the value is not an array', () => {
      assert.equal(false, Array.isArray('Test Me'));
    });
  });
});
