var Tag = require('./tagModel');

exports.create = (req, res) => {
  res.send('create tag');
};

exports.list = (req, res) => {
  res.send('all tags');
};

exports.get = (req, res) => {
  res.send('get tag');
};

exports.update = (req, res) => {
  res.send('update tag');
};

exports.delete = (req, res) => {
  res.send('delete tag');
};
