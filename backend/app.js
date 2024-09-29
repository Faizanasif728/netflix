var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
//----------------------------------------------------
//remember
var userRouter = require("./routes/userRouter");
var authRouter = require("./routes/authRouter");

var movieRouter = require("./routes/movieRouter");
var tvShowsRouter = require("./routes/tvShowsRouter");
var searchRouter = require("./routes/searchRouter");

const middleware = require("./middleware");
//----------------------------------------------------

var app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed methods
    credentials: true, // Allow credentials
  })
);
// view engine setup

app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//----------------------------------------------------
//remember
app.use("/users", userRouter);
app.use("/auth", authRouter);

app.use("/movie", middleware, movieRouter);
app.use("/tv", middleware, tvShowsRouter);
app.use("/search", middleware, searchRouter);
//----------------------------------------------------

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
  res.render("error");
});

module.exports = app;
