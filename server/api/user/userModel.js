var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // TODO: Encrypt
  email: {type: String, required: true, unique: true},
  created_at: { type: Date, default: Date.now },
  updated_at: Date,
});

userSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  next();
});

var User = mongoose.model('User', userSchema);

module.exports = User;
