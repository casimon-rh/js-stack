// const someController = require('../controllers').controller;
const config = require('../../conf');
module.exports = (app, jwt) => {
  const jwt_middleware = (req, res, jwt, controller) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      jwt.verify(req.headers.authorization.split(' ')[1], config.secret, (err) => {
        if (err) {
          return res.status(401).send({
            message: 'Unauthorized'
          });
        }
        return controller(req, res);
      });
    } else {
      return res.status(401).send({
        message: 'Unauthorized'
      });
    }
  };
  // app.get('/api/model',someController.list);
  // app.post('/api/model', (req, res) =>jwt_middleware(req, res, jwt,someController.create));
  // app.get('/api/model/:modelId',someController.retrieve);
  // app.put('/api/model/:modelId',someController.update);
  // app.delete('/api/model/:modelId',someController.destroy);
}