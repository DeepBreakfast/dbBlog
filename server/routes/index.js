var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.json({message: 'dbBlog root'});
});

module.exports = router;
