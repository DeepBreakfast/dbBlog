var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  author: {type: Schema.Types.ObjectId, ref: 'Author'},
  title: String,
  content: String,
  image: {type: Schema.Types.ObjectId, ref: 'Image'},
  tags: [{type: Schema.Types.ObjectId, ref: 'Tag'}],
  created_at: { type: Date, default: Date.now },
  updated_at: Date
});

postSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  next();
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
