var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var actionsRouter = require("./routes/actions"); //Import routes for "actions" area of site

var app = express();

//Set up mongoose connection
var mongoose = require("mongoose");
mongoose.set("useFindAndModify", false); // required for findByIdAndUpdate() among others, see https://mongoosejs.com/docs/deprecations.html#findandmodify
var dev_db_url =
  "mongodb+srv://lkonline:rZ4JtvM2Wvv2mXL@cluster0.ormxd.mongodb.net/soho?retryWrites=true&w=majority";
var mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/actions", actionsRouter); // Add actions routes to middleware chain.

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
