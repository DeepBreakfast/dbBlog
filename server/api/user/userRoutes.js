var express = require('express');
var router = express.Router();
var userController = require('./userController');

router.get('/', (req, res, next) => {
  userController.list(req, res);
});

router.get('/:id', (req, res, next) => {
  userController.get(req, res);
});

router.get('/:id/posts', (req, res, next) => {
  userController.listPosts(req, res);
});

router.post('/', (req, res, next) => {
  userController.create(req, res);
});

router.post('/:id', (req, res, next) => {
  userController.update(req, res);
});

router.post('/:id/delete', (req, res, next) => {
  userController.delete(req, res);
});

module.exports = router;
