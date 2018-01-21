var User = require('./userModel');

exports.create = (req, res) => {
  var user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return handleError(err);
    } else {
      res.json(user.toJson());
    }
  });
};

exports.list = (req, res) => {
  User.find({}, (err, allUsers) => {
    if (!err) {
      res.json(allUsers);
    }
  });
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
