var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    poster: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    tags: [{type: Schema.Types.ObjectId, ref: 'Tag', required: true}]
  }
);

// Virtual for post's URL
PostSchema
.virtual('url')
.get(function () {
  return '/catalog/post/' + this._id;
});

//Export model
module.exports = mongoose.model('Post', PostSchema);