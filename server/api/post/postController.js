var Post = require('./postModel');

exports.create = (req, res) => {
  res.send('create post');
};

exports.list = (req, res) => {
  res.send('all posts');
};

exports.get = (req, res) => {
  res.send('get post');
};

exports.update = (req, res) => {
  res.send('update post');
};

exports.delete = (req, res) => {
  res.send('delete post');
};
