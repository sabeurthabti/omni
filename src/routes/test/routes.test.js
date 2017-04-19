import proxyquire from 'proxyquire';
import express from 'express';

describe('Routes', () => {
  let expressApp;
  let routes;

  beforeEach(() => {
    expressApp = express();
    sinon.stub(expressApp, 'get');
    sinon.stub(expressApp, 'post');
    routes = proxyquire('../index.js', {}).default;
    routes.init(expressApp);
  });

  it('should /config/{client}/{version} route', () => {
    expect(expressApp.post).to.have.been.calledWith('/config');
    expect(expressApp.get).to.have.been.calledWith('/config/:client/:version');
  });
});
