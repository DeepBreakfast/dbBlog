var Image = require('../models/image');

exports.create = (req, res) => {
  res.send('create image');
};

exports.list = (req, res) => {
  res.send('all images');
};

exports.get = (req, res) => {
  res.send('get image');
};

exports.update = (req, res) => {
  res.send('update image');
};

exports.delete = (req, res) => {
  res.send('delete image');
};
