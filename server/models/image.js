var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageSchema = new Schema({
  name: String,
  filename: String,
  url: String,
  created_at: { type: Date, default: Date.now }
});

var Image = mongoose.model('Image', imageSchema);

module.exports = Image;
