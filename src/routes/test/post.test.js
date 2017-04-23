import proxyquire from 'proxyquire';
describe('Routes', () => {
  let postRoutes;

  const req = {
    body : {
      client : 'ios',
      version : '267',
      key : 'ads_endpoint',
      value : '/devads'
    }
  };

  let res = {};

  beforeEach(() => {
    res = {
      sendStatus : sinon.spy(),
      json : sinon.spy(),
      dataStore : {
        push : sinon.spy()
      }
    };
    postRoutes = proxyquire('../post.js', {}).default;
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should handle POST request', () => {
    postRoutes(req, res);

    expect(res.sendStatus).to.have.been.calledWith(201);
    expect(res.dataStore.push).to.have.been.calledWith(req.body);
  });

  it('should validate the request body for required items', () => {
    req.body = {};
    postRoutes(req, res);
    expect(res.sendStatus).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({
      message : 'Missing required properties'
    });
    
  });
});
