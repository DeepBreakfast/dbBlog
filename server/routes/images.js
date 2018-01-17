var express = require('express');
var router = express.Router();
var imageController = require('../controllers/image');

router.get('/', (req, res, next) => {
  imageController.list(req, res);
});

router.get('/:id', (req, res, next) => {
  imageController.get(req, res);
});

router.post('/', (req, res, next) => {
  imageController.create(req, res);
});

router.post('/:id', (req, res, next) => {
  imageController.update(req, res);
});

router.post('/:id/delete', (req, res, next) => {
  imageController.delete(req, res);
});

module.exports = router;
