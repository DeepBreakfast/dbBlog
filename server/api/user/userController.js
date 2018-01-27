var User = require('./userModel');

exports.create = (req, res) => {
  var user = new User(req.body);
  user.save((err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.list = (req, res) => {
  User.find({}, (err, allUsers) => {
    if (err) res.send(err);
    res.json(allUsers);
  });
};

exports.get = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
}

exports.listPosts = (req, res) => {
  res.send('get all posts by user');
};

exports.update = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if(err) res.send(err);
    Object.assign(user, req.body).save((err, user) => {
      if (err) res.send(err);
      res.json(user);
    });
  });
};

exports.delete = (req, res) => {
  User.remove({_id: req.params.id}, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};
