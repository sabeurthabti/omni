import proxyquire from 'proxyquire';

describe('Get Config', () => {
  let getRoutes;
  let req;
  let res;

  beforeEach(() => {
    req = {};
    res = {
      dataStore : [],
      status : sinon.spy(),
      json : sinon.spy()
    };

    getRoutes = proxyquire('../get.js', {}).default;
  });

  it('should call res.json', () => {
    req.params = {
      client : 'abc',
      version : 'abc'
    };
    getRoutes(req, res);
    expect(res.json).to.have.been.calledOnce;
  });

  it('should return an error message when client paramter is missing', () => {
    req.params = {
      client : '',
      version : 'abc'
    };

    res.status = sinon.spy();
    getRoutes(req, res);

    expect(res.status).to.have.been.called;
    expect(res.json).to.have.been.calledWith({
      message : 'required paramater is missing!'
    });
  });

  it('should return an error message when version paramter is missing', () => {
    req.params = {
      client : 'abc',
      version : null
    };

    getRoutes(req, res);

    expect(res.status).to.have.been.called;
    expect(res.json).to.have.been.calledWith({
      message : 'required paramater is missing!'
    });
  });

  it('should return an application config given both client and version paramters', () => {
    req.params = {
      client : 'ios',
      version : '267'
    };

    res.dataStore = [
      {
        client : 'ios',
        version : '267',
        key : 'ads_endpoint',
        value : '/devadsiOS'
      },
      {
        client : 'ios',
        version : '269',
        key : 'backgroundColor',
        value : '#00000'
      },
      {
        client : 'web',
        version : '124',
        key : 'web_endpoint',
        value : 'http://news.com'
      }
    ];

    getRoutes(req, res);

    expect(res.json).to.have.been.calledWith({ 'ads_endpoint' : '/devadsiOS' });
  });

  it('should return 404 with an error message when no application has been found', () => {
    req.params = {
      client : 'mac',
      version : '267'
    };

    res.dataStore = [
      {
        client : 'ios',
        version : '267',
        key : 'ads_endpoint',
        value : '/devads'
      },
      {
        client : 'web',
        version : '124',
        key : 'web_endpoint',
        value : 'http://news.com'
      }
    ];

    getRoutes(req, res);

    expect(res.json).to.have.been.calledWith({
      message : 'Application Config not found!'
    });
  });
});
