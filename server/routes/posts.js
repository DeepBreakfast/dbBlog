var express = require('express');
var router = express.Router();
var postController = require('../controllers/post');

router.get('/', (req, res, next) => {
  postController.list(req, res);
});

router.get('/:id', (req, res, next) => {
  postController.get(req, res);
});

router.post('/', (req, res, next) => {
  postController.create(req, res);
});

router.post('/:id', (req, res, next) => {
  postController.update(req, res);
});

router.post('/:id/delete', (req, res, next) => {
  postController.delete(req, res);
});

module.exports = router;
