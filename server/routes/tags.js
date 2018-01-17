var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('get all tags');
});

router.get('/:id', (req, res, next) => {
  res.send('get tag by id');
});

router.post('/', (req, res, next) => {
  res.send('create tag');
});

router.post('/:id', (req, res, next) => ) {
  res.send('update tag');
});

module.exports = router;
