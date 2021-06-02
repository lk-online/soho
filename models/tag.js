var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TagSchema = new Schema({
  name: { type: String },
  category: { type: String, required: true, enum: ["basic", "area", "geo", "price", "required", "optional"] },
});

// Virtual for tag's URL
TagSchema.virtual("url").get(function () {
  return "/actions/tag/" + this._id;
});

//Export model
module.exports = mongoose.model("Tag", TagSchema);
