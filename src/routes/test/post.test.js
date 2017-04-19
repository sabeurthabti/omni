import proxyquire from 'proxyquire';

describe('Routes', () => {
  let postRoutes;

  beforeEach(() => {
    postRoutes = proxyquire('../post.js', {}).default;
  });

  it('should return ', () => {
    const req = {};
    const res = {
      sendStatus : sinon.spy()
    };

    postRoutes(req, res);

    expect(res.sendStatus).to.have.been.calledOnce;
  });
});
