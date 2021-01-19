var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: { type: String, required: true, maxlength: 100 },
  capacity: { type: String, required: true, enum: ["ιδιώτης", "επαγγελματίας"] },
});

// Virtual for user's URL
UserSchema.virtual("url").get(function () {
  return "/actions/user/" + this._id;
});

//Export model
module.exports = mongoose.model("User", UserSchema);
