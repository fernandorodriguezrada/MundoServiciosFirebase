const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../response/index');

router.get('/', (req, res) => {
  // const authorization = req.headers.authorization;
  // if (authorization) {
  //   if (req.query.title) {
  //     controller.getOnlyProduct(req.query.title)
  //       .then((productsList) => response.success(req, res, productsList, 200))
  //       .catch((error) => response.error(req, res, 'Internal Error', 500, error));
  //   } else if (req.query.id) {
  //     controller.getOnlyProductByID(req.query.id)
  //       .then((productsList) => response.success(req, res, productsList, 200))
  //       .catch((error) => response.error(req, res, 'Internal Error', 500, error));
  //   } else {
  //     controller.getProducts()
  //       .then((productsList) => response.success(req, res, productsList, 200))
  //       .catch((error) => response.error(req, res, 'Internal Error', 500, error));
  //   }
  // }

  controller.getServices()
    .then((productsList) => response.success(req, res, productsList, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error));
});

router.post('/', (req, res) => {
  controller.addService(req.body)
    .then((product) => response.success(req, res, product, 201))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error));
});

router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const change = req.body;
  controller.updateService(id, change)
    .then((changedProduct) => response.success(req, res, changedProduct, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error));
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  controller.deleteService(id)
    .then((deleted) => response.success(req, res, deleted, 200))
    .catch((error) => response.error(req, res, 'Internal error', 500, error));
});

module.exports = router;