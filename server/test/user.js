/*
* Tests API endpoints for User model
*/

process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let User = require('../api/user/userModel');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

let userObj = {
  name: 'Jane Doe',
  username: 'janedoe',
  password: 'password',
  email: 'janedoe@domain.com'
};

let postObj = {
  title: 'Test Post',
  content : 'Some content.'
};

let tagObj = {
  name: 'mytag',
};

describe('Users', () => {
  beforeEach((done) => {
    User.remove({}, (err) => {
        done();
    });
  });

  /*
  * Test /GET route
  */
  describe('/GET user', () => {
    it('It should GET all the users', (done) => {
      chai.request(server)
        .get('/api/users')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  /*
  * Test the /GET/:id route
  */
  describe('/GET/:id user', () => {
    it('It should GET a single user by a given id', (done) => {
      let user = new User(userObj);
      user.save((err, user) => {
        chai.request(server)
          .get('/api/users/' + user.id)
          .send(userObj)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('name').eql(userObj.name);
            res.body.should.have.property('username').eql(userObj.username);
            res.body.should.have.property('password').eql(userObj.password);
            res.body.should.have.property('email').eql(userObj.email);
            res.body.should.have.property('_id').eql(user.id);
            done();
          });

      });
    });
  });

  /*
  * Test the /POST route
  */
  describe('/POST user', () => {
    it('It should POST a user', (done) => {
      chai.request(server)
        .post('/api/users')
        .send(userObj)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('name').eql(userObj.name);
          res.body.should.have.property('username').eql(userObj.username);
          res.body.should.have.property('password').eql(userObj.password);
          res.body.should.have.property('email').eql(userObj.email);
          done();
        });
    });
  });

  /*
  * Test the PUT route
  */

});
