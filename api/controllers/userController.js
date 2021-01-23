var User = require("../models/user");

// Display list of all Users.
exports.user_list = function (req, res) {
  res.send("NOT IMPLEMENTED: User list");
};

// Display detail page for a specific User.
exports.user_detail = function (req, res) {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Display User create form on GET.
exports.user_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: User create GET");
};

// Handle User create on POST.
exports.user_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: User create POST");
};

// Display User delete form on GET.
exports.user_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: User delete GET");
};

// Handle User delete on POST.
exports.user_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: User delete POST");
};

// Display User update form on GET.
exports.user_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: User update GET");
};

// Handle User update on POST.
exports.user_update_post = [
  (req, res, next) => {
    var user = new User({
      _id: req.params.id,
      like: req.body.like,
      interested: req.body.interested,
      seen: req.body.seen,
      // interested: typeof req.body.interested === "undefined" ? [] : req.body.interested,
      //seen: typeof req.body.seen === "undefined" ? [] : req.body.seen,
    });
    User.findByIdAndUpdate(req.params.id, user, {}, function (err, theUser) {
      if (err) {
        return next(err);
      }
      // Successful
      res.send(user);
    });
  },
  //console.log(res.body);
];
