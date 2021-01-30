var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
<<<<<<< HEAD
var cors = require("cors");
=======
var cors=require('cors')
>>>>>>> 176c0dbbb569e09ba76133e6c9a1f6e0341bea06

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/authenticationRouter");
var bookRouter = require("./routes/bookRouter");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/user", authRouter);
app.use("/book", bookRouter);
module.exports = app;
