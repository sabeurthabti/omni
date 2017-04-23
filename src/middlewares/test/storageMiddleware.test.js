import proxyquire from 'proxyquire';

describe('storageMiddleware', () => {
  let storeagemw;

  beforeEach(() => {
    storeagemw = proxyquire('../storageMiddleware.js', {}).default;
  });

  it('should set dataStore on the response object', done => {
    const req = {};
    const res = {
      dataStore : sinon.spy()
    };

    storeagemw(req, res, () => {
      expect(res.dataStore).to.eql([]);
      done();
    });
  });
});
