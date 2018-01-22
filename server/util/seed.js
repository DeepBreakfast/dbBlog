var Post = require('../api/post/postModel');
var Tag = require('../api/tag/tagModel');
var User = require('../api/user/userModel');
var logger = require('./logger');

logger.log('Seeding the database.');

// clean db
var cleanDB = function() {
  logger.log('... cleaning the database ...');
  var cleanPromises = [User, Post, Tag]
    .map(function(model) {
      return model.remove().exec();
    });
  return Promise.all(cleanPromises);
}

var seedDB = function() {
  var user = new User({
    name: 'test',
    username: 'test',
    password: 'test',
    email: 'test@test.com'
  });

  var tag = new Tag({
    name: 'test',
  });

  var post = new Post({
    title: 'test',
    author: user,
    content: 'test',
    tags: [tag]
  });

  user.save();
  tag.save();
  post.save();
}

cleanDB()
  .then(seedDB);

logger.log("Finished seeding the database.");
