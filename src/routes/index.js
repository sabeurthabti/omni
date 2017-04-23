import get from './get';
import post from './post';
export default {
  init : app => {
    app.post('/config', post);
    app.get('/config/:client/:version', get);
  }
};
