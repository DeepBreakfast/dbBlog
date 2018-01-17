var User = require('../models/user');

exports.create = (req, res) => {
  res.send('create user');
};

exports.list = (req, res) => {
  res.send('all users');
};

exports.get = (req, res) => {
  res.send('get user');
};

exports.listPosts = (req, res) => {
  res.send('get all posts by user');
};

exports.update = (req, res) => {
  res.send('update user');
};

exports.delete = (req, res) => {
  res.send('delete user');
};
