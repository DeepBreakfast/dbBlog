var express = require('express');
var router = express.Router();
var userController = require('./userController');

// Get all users
router.get('/', (req, res, next) => {
  userController.list(req, res);
});

// Get a user by id
router.get('/:id', (req, res, next) => {
  userController.get(req, res);
});

// Get all posts by user id
router.get('/:id/posts', (req, res, next) => {
  userController.listPosts(req, res);
});

// Create a user
router.post('/', (req, res, next) => {
  userController.create(req, res);
});

// Update a user
router.put('/:id', (req, res, next) => {
  userController.update(req, res);
});

// Delete a user
router.delete('/:id', (req, res, next) => {
  userController.delete(req, res);
});

module.exports = router;
