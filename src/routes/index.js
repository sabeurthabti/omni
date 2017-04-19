export default {
  init : app => {
    app.post('/config', (req, res) => {});
    app.get('/config/:client/:version', (req, res) => {});
  }
};
