var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PostSchema = new Schema({
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  tag: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
});

// Virtual for post's URL
PostSchema.virtual("url").get(function () {
  return "/actions/post/" + this._id;
});

//Export model
module.exports = mongoose.model("Post", PostSchema);
