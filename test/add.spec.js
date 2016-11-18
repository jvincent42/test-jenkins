const expect = require('chai').expect;

const add = require('../src/add').add;

describe('Dummy test', () => {
  it('should add 1 + 1', () => {
    expect(add(1)(1)).to.be.equal(2);
  });
});
