const express = require('express')
const router = express.Router();
const shipping = require('../components/shipping/router.js');
const services = require('../components/services/router.js');

// rutas que sirven como mesero.
function routerApp(app) {
  app.use('/api/v1', router);
  router.use('/shipping', shipping);
  router.use('/services', services);
}

module.exports = routerApp;