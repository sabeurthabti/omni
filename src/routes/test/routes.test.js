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

  it('should have /config/{client}/{version} route handler', () => {
    expect(expressApp.get).to.have.been.calledWith('/config/:client/:version', sinon.match.func);
  });

  it('should have /config route handler', () => {
    expect(expressApp.get).to.have.been.calledWith('/config/:client/:version', sinon.match.func);
  });

});
