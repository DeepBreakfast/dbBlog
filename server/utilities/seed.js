var User = require('../api/user/userModel');

var createUsers = () => {
  var users = [
    {
      name: 'Test Test',
      username: 'test',
      passowrd: 'test',
      email: 'test@test.com'
    },
    {
      name: 'Joe Davancens',
      username: 'j_davancens',
      password: 'abcd1234',
      email: 'josephdavancens@gmail.com',
    },
    {
      name: 'Jane Doe',
      username: 'janedoe',
      password: 'password',
      email: 'janedoe@dbblog.com'
    }
  ]
  var User = mongoose.model('User', userSchema);
  users.map((user) => {
    User.create(user);
    User.save();
  });
};



// var posts = [
//   {
//     author: 'j_davancens',
//     title: 'My First Post',
//     content: '<h1>This is a post</h1><p>It has HTML in it.</p>',
//     image: null,
//     tags: ['blog', 'test', 'dev', 'api']
//   },
//   {
//     author: 'j_davancens',
//     title: 'My Second Post',
//     content: '<h1>This is another post</h1><p>It also has HTML in it.</p>',
//     image: null,
//     tags: ['blog', 'test', 'dev', 'api']
//   }
// ]
//
// var tags = [
//   {name: 'blog'},
//   {name: 'test'},
//   {name: 'dev'},
//   {name: 'api'}
// ]
