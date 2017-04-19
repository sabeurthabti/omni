import proxyquire from 'proxyquire';
import express from 'express';
import routes from '../routes';
describe('Server.js', () => {
  it('should run on the correct port and setup routes', () => {
    const expressApp = express();

    sinon.stub(expressApp, 'listen');
    sinon.stub(expressApp, 'use');
    sinon.stub(routes, 'init');

    proxyquire('../server', {
      express : sinon.stub().returns(expressApp), 
      routes : sinon.stub().returns(routes), 
    });
    
    expect(expressApp.listen).to.have.been.calledOnce;
    expect(expressApp.listen).to.been.calledWith(1234);
    expect(routes.init).to.have.been.calledOnce;
  });
});
