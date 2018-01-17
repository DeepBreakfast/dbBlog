var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('get all users');
});

router.get('/:id', (req, res, next) => {
  res.send('get user by id');
});

router.get('/:id/posts', (req, res, next) => {
  res.send('get all posts by user');
});

router.post('/', (req, res, next) => {
  res.send('create user');
});

router.post('/:id', (req, res, next) => {
  res.send('update user');
});

module.exports = router;
