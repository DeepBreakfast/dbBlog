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
        if(err) res.send(err);
        //If no errors, send it back to the client
        res.json(user);
    });
}

exports.listPosts = (req, res) => {
  res.send('get all posts by user');
};

exports.update = (req, res) => {
  res.send('update user');
};

exports.delete = (req, res) => {
  res.send('delete user');
};
