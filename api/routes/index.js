var express = require("express");
var router = express.Router();

/*
* GET home page. *
router.get("/", function (req, res, next) {
  res.render (express) (Response.render) renders a template
  along with the values of named variables passed in an object
  res.render("index", { title: "Express" }); // index in public folder
});
*/

// GET home page.
router.get("/", function (req, res) {
  res.redirect("/actions");
});

module.exports = router;
