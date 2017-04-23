import proxyquire from 'proxyquire';
import express from 'express';
import routes from '../routes';
import storageMiddleware from '../middlewares/storageMiddleware';
import bodyParser from 'body-parser';

describe('Server.js', () => {
  it('should run on the correct port and setup routes', () => {
    const expressApp = express();

    
    sinon.stub(expressApp, 'listen');
    sinon.stub(expressApp, 'use');
    sinon.stub(routes, 'init');

    proxyquire('../server', {
      express : sinon.stub().returns(expressApp), 
      routes : sinon.stub().returns(routes), 
      './middlewares/storageMiddleware' : sinon.stub().returns(storageMiddleware), 
      'body-parser' : {
        json : () => bodyParser.json
      },
    });
    
    expect(expressApp.listen).to.have.been.calledOnce;
    
    expect(expressApp.listen).to.been.calledWith(1234);
    
    expect(expressApp.use).to.been.called;

    expect(expressApp.use).to.been.calledWith(bodyParser.json);
    expect(expressApp.use).to.been.calledWith(storageMiddleware);
    
    expect(routes.init).to.have.been.calledOnce;
  });
});
