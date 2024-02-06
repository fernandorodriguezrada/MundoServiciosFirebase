const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../response/index');

router.get('/', (req, res) => {
  controller.getShipping()
    .then(result => response.success(req, res, result, 200))
    .catch(err => response.error(req, res, 'Internal Error', 500, err))
});

module.exports = router;