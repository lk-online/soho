var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TagSchema = new Schema({
  name: { type: String, required: true, maxlength: 100 },
  category: { type: String, required: true, enum: ["basic", "geo", "price", "required", "optional"] },
  geoCat: { type: String, required: true, enum: ["country", "prefecture", "city"] },
});

// Virtual for tag's URL
TagSchema.virtual("url").get(function () {
  return "/catalog/tag/" + this._id;
});

//Export model
module.exports = mongoose.model("Tag", TagSchema);
