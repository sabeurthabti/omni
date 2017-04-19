import proxyquire from 'proxyquire';

describe('Get Config', () => {
  let getRoutes;

  beforeEach(() => {
    getRoutes = proxyquire('../get.js', {}).default;
  });

  it('should return ', () => {
    const req = {};
    const res = {
      json : sinon.spy()
    };

    getRoutes(req, res);

    expect(res.json).to.have.been.calledOnce;
  });
});
