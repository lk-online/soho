const { body, validationResult } = require("express-validator");
var Tag = require("../models/tag");
var async = require("async");

// Display list of all Tags.
exports.tag_list = function (req, res) {
  res.send("NOT IMPLEMENTED: Tag list");
};

// Display detail page for a specific Tag.
exports.tag_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Tag detail: " + req.params.id);
};

// Display Tag create form on GET.
exports.tag_create_get = function (req, res) {
  res.send("hello");
};

// Handle Tag create on POST.
exports.tag_create_post = [
  // Validate and santise the name field.
  body("name").trim().isLength({ min: 1 }).escape(),
  // body("category").trim().isLength({ min: 1 }).escape(),
  // body("geoCat").trim().isLength({ min: 1 }).escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a Tag object with escaped and trimmed data.
    var tag = new Tag({ name: req.body.name /*, category: req.body.category, geoCat: req.body.geoCat */ });

    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values/error messages.
      res.send({ tag: tag, errors: errors.array() });
      return;
    } else {
      // Data from form is valid.
      // Check if Tag with same name already exists.
      Tag.findOne({ name: req.body.name }).exec(function (err, found_tag) {
        if (err) {
          return next(err);
        }

        if (found_tag) {
          // Tag exists, redirect to its detail page.
          res.redirect(found_tag.url);
        } else {
          tag.save(function (err) {
            if (err) {
              return next(err);
            }
            // Tag saved. Redirect to Tag detail page.
            //res.redirect(Tag.url);
            res.json(200);
          });
        }
      });
    }
  },
];

// Display Tag delete form on GET.
exports.tag_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Tag delete GET");
};

// Handle Tag delete on POST.
exports.tag_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Tag delete POST");
};

// Display Tag update form on GET.
exports.tag_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Tag update GET");
};

// Handle Tag update on POST.
exports.tag_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Tag update POST");
};
