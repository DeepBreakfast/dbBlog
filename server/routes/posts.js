var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('get all posts');
});

router.get('/:id', (req, res, next) => {
  res.send('get post by id');
});

router.post('/', (req, res, next) => {
  res.send('create post');
});

router.post('/:id', (req, res, next) => ) {
  res.send('update post');
});

module.exports = router;
