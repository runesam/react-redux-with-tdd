const expect = require('expect.js');
import assert from 'assert';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.be(true);
  });
});

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
  describe('#isArray()', function () {
    it('should return true when the value is an array', function () {
      assert.equal(true, Array.isArray([1, 2, 3]));
    });
  });
  describe('#isArray()', function () {
    it('should return false when the value is not an array', function () {
      assert.equal(false, Array.isArray('Test Me'));
    });
  });
});