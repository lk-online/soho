const { body, validationResult } = require("express-validator");
var Post = require("../models/post");
var Tag = require("../models/tag");
const User = require("../models/user");

exports.index = function (req, res) {
  res.send("NOT IMPLEMENTED: Site Home Page");
};

// Display list of all posts.
exports.post_list = function (req, res) {
  Post.find({})
    .populate("tag")
    .populate("user")
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Display detail page for a specific post.
exports.post_detail = function (req, res) {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Display post create form on GET.
exports.post_create_get = function (req, res, next) {
  // Get all tags, which we can use for adding to our post.

  Tag.find()
    .then((tags) => res.json(tags))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Handle post create on POST.
exports.post_create_post = [
  // Convert the tag to an array.
  (req, res, next) => {
    if (!(req.body.tag instanceof Array)) {
      if (typeof req.body.tag === "undefined") req.body.tag = [];
      else req.body.tag = new Array(req.body.tag);
    }
    next();
  },

  // Validate and sanitise fields.
  body("tag.*").escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a Post object with escaped and trimmed data.
    var post = new Post({
      tag: req.body.tag,
      user: req.body.user,
    });

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/error messages.

      // Get all tags for form.
      async.parallel(
        {
          tags: function (callback) {
            Tag.find(callback);
          },
        },
        function (err, results) {
          if (err) {
            return next(err);
          }

          // Mark our selected tags as checked.
          for (let i = 0; i < results.tags.length; i++) {
            if (post.tag.indexOf(results.tags[i]._id) > -1) {
              results.tags[i].checked = "true";
            }
          }
          res.send("errors");
        }
      );
      return;
    } else {
      // Data from form is valid. Save post.
      post.save(function (err) {
        if (err) {
          return next(err);
        }
        res.send("all done");
      });
    }
  },
];

// Display post delete form on GET.
exports.post_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Post delete GET");
};

// Handle post delete on POST.
exports.post_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Post delete POST");
};

// Display post update form on GET.
exports.post_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Post update GET");
};

// Handle post update on POST.
exports.post_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Post update POST");
};
