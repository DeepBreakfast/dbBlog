var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('get all images');
});

router.get('/:id', (req, res, next) => {
  res.send('get image by id');
});

router.post('/', (req, res, next) => {
  res.send('create image');
});

router.post('/:id', (req, res, next) => ) {
  res.send('update image');
});

module.exports = router;
