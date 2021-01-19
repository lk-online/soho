#! /usr/bin/env node

console.log(
  "This script populates some test docs to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true"
);

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require("async");
var Post = require("./models/post");
var User = require("./models/user");
var Tag = require("./models/tag");

var mongoose = require("mongoose");
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var users = [];
var tags = [];
var posts = [];

function userCreate(username, capacity, cb) {
  userdetail = { username: username, capacity: capacity };

  var user = new User(userdetail);

  user.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New User: " + user);
    users.push(user);
    cb(null, user);
  });
}

function tagCreate(name, category, cb) {
  var tag = new Tag({ name: name, category: category });

  tag.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Tag: " + tag);
    tags.push(tag);
    cb(null, tag);
  });
}

function postCreate(user, tag, cb) {
  postdetail = {};
  if (tag != false) postdetail.tag = tag;
  if (user != false) postdetail.user = user;

  var post = new Post(postdetail);
  post.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Post: " + post);
    posts.push(post);
    cb(null, post);
  });
}

function createTagUsers(cb) {
  async.series(
    [
      function (callback) {
        userCreate("sunsetbeach", "επαγγελματίας", callback);
      },
      function (callback) {
        userCreate("rodeoand5th", "επαγγελματίας", callback);
      },
      function (callback) {
        userCreate("valuehomes", "επαγγελματίας", callback);
      },
      function (callback) {
        userCreate("centuryhouses", "επαγγελματίας", callback);
      },
      function (callback) {
        userCreate("proagents", "επαγγελματίας", callback);
      },
      function (callback) {
        userCreate("lkonline", "ιδιώτης", callback);
      },
      function (callback) {
        userCreate("ero", "ιδιώτης", callback);
      },
      function (callback) {
        userCreate("daisy", "ιδιώτης", callback);
      },
      function (callback) {
        userCreate("joe", "ιδιώτης", callback);
      },
      function (callback) {
        userCreate("lemonpie", "ιδιώτης", callback);
      },
      function (callback) {
        userCreate("cheesecake", "ιδιώτης", callback);
      },
      function (callback) {
        userCreate("johndoe", "ιδιώτης", callback);
      },
      function (callback) {
        userCreate("janedoe", "ιδιώτης", callback);
      },
      function (callback) {
        userCreate("thedude", "ιδιώτης", callback);
      },
      function (callback) {
        tagCreate("Νέα Σμύρνη", "geo", callback);
      },
      function (callback) {
        tagCreate("Παγκράτι", "geo", callback);
      },
      function (callback) {
        tagCreate("Καλλιθέα", "geo", callback);
      },
      function (callback) {
        tagCreate("Λαγονήσι", "geo", callback);
      },
      function (callback) {
        tagCreate("Χαλάνδρι", "geo", callback);
      },
      function (callback) {
        tagCreate("Πικέρμι", "geo", callback);
      },
      function (callback) {
        tagCreate("Ραφήνα", "geo", callback);
      },
      function (callback) {
        tagCreate("6ος", "basic", callback);
      },
      function (callback) {
        tagCreate("1ος", "basic", callback);
      },
      function (callback) {
        tagCreate("50τμ", "area", callback);
      },
      function (callback) {
        tagCreate("130τμ", "area", callback);
      },
      function (callback) {
        tagCreate("90τμ", "area", callback);
      },
      function (callback) {
        tagCreate("280τμ", "area", callback);
      },
      function (callback) {
        tagCreate("860τμ", "area", callback);
      },
      function (callback) {
        tagCreate("άμεσα διαθέσιμο", "basic", callback);
      },
      function (callback) {
        tagCreate("διαθέσιμο από 1/3", "basic", callback);
      },
      function (callback) {
        tagCreate("€500", "price", callback);
      },
      function (callback) {
        tagCreate("€300", "price", callback);
      },
      function (callback) {
        tagCreate("€900", "price", callback);
      },
      function (callback) {
        tagCreate("€2500", "price", callback);
      },
      function (callback) {
        tagCreate("πετρέλαιο", "required", callback);
      },
      function (callback) {
        tagCreate("φυσικό αέριο", "required", callback);
      },
      function (callback) {
        tagCreate("πάρκινγκ πυλωτής", "optional", callback);
      },
      function (callback) {
        tagCreate("κλειστό πάρκινγκ", "optional", callback);
      },
      function (callback) {
        tagCreate("παρκέ", "optional", callback);
      },
      function (callback) {
        tagCreate("διαμπερές", "optional", callback);
      },
      function (callback) {
        tagCreate("πόρτα ασφαλείας", "optional", callback);
      },
      function (callback) {
        tagCreate("τέντες", "optional", callback);
      },
      function (callback) {
        tagCreate("ανακαινισμένο", "optional", callback);
      },
    ],
    // optional callback
    cb
  );
}

function createPosts(cb) {
  async.parallel(
    [
      function (callback) {
        postCreate(
          [users[2], users[5], users[8]],
          [
            tags[0],
            tags[7],
            tags[9],
            tags[15],
            tags[17],
            tags[21],
            tags[23],
            tags[25],
            tags[26],
            tags[28],
            tags[29],
          ],
          callback
        );
      },
      function (callback) {
        postCreate(
          [users[1], users[2], users[4], users[5], users[6]],
          [
            tags[2],
            tags[7],
            tags[11],
            tags[15],
            tags[20],
            tags[22],
            tags[23],
            tags[24],
            tags[26],
            tags[27],
            tags[28],
          ],
          callback
        );
      },
      function (callback) {
        postCreate(
          [users[9]],
          [
            tags[0],
            tags[8],
            tags[9],
            tags[18],
            tags[21],
            tags[23],
            tags[24],
            tags[25],
            tags[27],
            tags[28],
            tags[29],
          ],
          callback
        );
      },
      function (callback) {
        postCreate(
          [users[3], users[4], users[5], users[9]],
          [
            tags[6],
            tags[7],
            tags[11],
            tags[15],
            tags[17],
            tags[21],
            tags[23],
            tags[24],
            tags[25],
            tags[26],
            tags[27],
            tags[29],
          ],
          callback
        );
      },
      function (callback) {
        postCreate(
          [users[0], users[1], users[8]],
          [
            tags[4],
            tags[8],
            tags[12],
            tags[15],
            tags[17],
            tags[21],
            tags[23],
            tags[25],
            tags[26],
            tags[27],
            tags[28],
            tags[29],
          ],
          callback
        );
      },
      function (callback) {
        postCreate(
          [users[1], users[4], users[8]],
          [
            tags[0],
            tags[7],
            tags[9],
            tags[15],
            tags[17],
            tags[21],
            tags[23],
            tags[25],
            tags[26],
            tags[28],
            tags[29],
          ],
          callback
        );
      },
      function (callback) {
        postCreate(
          [users[1], users[4], users[5], users[6]],
          [
            tags[2],
            tags[7],
            tags[11],
            tags[15],
            tags[20],
            tags[22],
            tags[23],
            tags[24],
            tags[26],
            tags[27],
            tags[28],
          ],
          callback
        );
      },
      function (callback) {
        postCreate(
          [users[9], users[8]],
          [
            tags[0],
            tags[8],
            tags[9],
            tags[18],
            tags[21],
            tags[23],
            tags[24],
            tags[25],
            tags[27],
            tags[28],
            tags[29],
          ],
          callback
        );
      },
      function (callback) {
        postCreate(
          [users[4], users[5], users[9]],
          [
            tags[6],
            tags[7],
            tags[11],
            tags[15],
            tags[17],
            tags[21],
            tags[23],
            tags[24],
            tags[25],
            tags[26],
            tags[27],
            tags[29],
          ],
          callback
        );
      },
      function (callback) {
        postCreate(
          [users[0]],
          [
            tags[4],
            tags[8],
            tags[12],
            tags[15],
            tags[17],
            tags[21],
            tags[23],
            tags[25],
            tags[26],
            tags[27],
            tags[28],
            tags[29],
          ],
          callback
        );
      },
      function (callback) {
        postCreate(
          [users[1], users[8]],
          [tags[0], tags[7], tags[9], tags[15], tags[17], tags[21], tags[23], tags[25], tags[28], tags[29]],
          callback
        );
      },
      function (callback) {
        postCreate(
          [users[5], users[6]],
          [tags[2], tags[7], tags[11], tags[15], tags[20], tags[22], tags[23], tags[24], tags[26], tags[27]],
          callback
        );
      },
      function (callback) {
        postCreate(
          [users[9], users[2]],
          [
            tags[0],
            tags[8],
            tags[9],
            tags[18],
            tags[21],
            tags[23],
            tags[24],
            tags[25],
            tags[27],
            tags[28],
            tags[29],
          ],
          callback
        );
      },
      function (callback) {
        postCreate(
          [users[4], users[5], users[7]],
          [
            tags[6],
            tags[7],
            tags[11],
            tags[15],
            tags[17],
            tags[21],
            tags[23],
            tags[24],
            tags[25],
            tags[26],
            tags[27],
            tags[29],
          ],
          callback
        );
      },
      function (callback) {
        postCreate(
          [users[8]],
          [
            tags[4],
            tags[8],
            tags[12],
            tags[15],
            tags[17],
            tags[21],
            tags[23],
            tags[25],
            tags[26],
            tags[27],
            tags[28],
            tags[29],
          ],
          callback
        );
      },
    ],
    // optional callback
    cb
  );
}

async.series(
  [createTagUsers, createPosts],
  // Optional callback
  function (err, results) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log("all good");
    }
    // All done, disconnect from database
    mongoose.connection.close();
  }
);
