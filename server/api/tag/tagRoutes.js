var express = require('express');
var router = express.Router();
var tagController = require('./tagController');

router.get('/', (req, res, next) => {
  tagController.list(req, res);
});

router.get('/:id', (req, res, next) => {
  tagController.get(req, res);
});

router.post('/', (req, res, next) => {
  tagController.create(req, res);
});

router.post('/:id', (req, res, next) => {
  tagController.update(req, res);
});

router.post('/:id/delete', (req, res, next) => {
  tagController.delete(req, res);
});

module.exports = router;
