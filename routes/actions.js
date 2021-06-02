var express = require("express");
var router = express.Router();

// Require controller modules.
var post_controller = require("../controllers/postController");
var user_controller = require("../controllers/userController");
var tag_controller = require("../controllers/tagController");

/// Post ROUTES ///

// GET actions home page.
router.get("/", post_controller.index);

// GET request for creating a Post. NOTE This must come before routes that display Post (uses id).
router.get("/post/create", post_controller.post_create_get);

// POST request for creating Post.
router.post("/post/create", post_controller.post_create_post);

// GET request to delete Post.
router.get("/post/:id/delete", post_controller.post_delete_get);

// POST request to delete Post.
router.post("/post/:id/delete", post_controller.post_delete_post);

// GET request to update Post.
router.get("/post/:id/update", post_controller.post_update_get);

// POST request to update Post.
router.post("/post/:id/update", post_controller.post_update_post);

// GET request for one Post.
router.get("/post/:id", post_controller.post_detail);

// GET request for list of all Post items.
router.get("/posts", post_controller.post_list);

/// User ROUTES ///

// GET request for creating User. NOTE This must come before route for id (i.e. display user).
router.get("/user/create", user_controller.user_create_get);

// POST request for creating User.
router.post("/user/create", user_controller.user_create_post);

// GET request to delete User.
router.get("/user/:id/delete", user_controller.user_delete_get);

// POST request to delete User.
router.post("/user/:id/delete", user_controller.user_delete_post);

// GET request to update User.
router.get("/user/:id/update", user_controller.user_update_get);

// POST request to update User.
router.post("/user/:id/update", user_controller.user_update_post);

// GET request for one User.
router.get("/user/:id", user_controller.user_detail);

// GET request for list of all Users.
router.get("/users", user_controller.user_list);

/// Tag ROUTES ///

// GET request for creating a Tag. NOTE This must come before route that displays Tag (uses id).
router.get("/tag/create", tag_controller.tag_create_get);

//POST request for creating Tag.
router.post("/tag/create", tag_controller.tag_create_post);

// GET request to delete Tag.
router.get("/tag/:id/delete", tag_controller.tag_delete_get);

// POST request to delete Tag.
router.post("/tag/:id/delete", tag_controller.tag_delete_post);

// GET request to update Tag.
router.get("/tag/:id/update", tag_controller.tag_update_get);

// POST request to update Tag.
router.post("/tag/:id/update", tag_controller.tag_update_post);

// GET request for one Tag.
router.get("/tag/:id", tag_controller.tag_detail);

// GET request for list of all Tag.
router.get("/tags", tag_controller.tag_list);

module.exports = router;
