var Post = require('./postModel');

exports.create = (req, res) => {
  var post = new Post(req.body);
  post.save((err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.list = (req, res) => {
  Post.find({}, (err, allPosts) => {
    if (err) res.send(err);
    res.json(allPosts);
  });
};

exports.get = (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) res.send(err);
    res.json(post)
  });
};

exports.update = (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if(err) res.send(err);
    Object.assign(user, req.body).save((err, post) => {
      if (err) res.send(err);
      res.json(post);
    });
  });
};

exports.delete = (req, res) => {
  Post.remove({_id: req.params.id}, (err, post) => {
    if (err) res.send(err);
    res.json(post);
  });
};
