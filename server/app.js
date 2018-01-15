var express = require('express');
var path = require('path'); // utilities for working with file/directory paths
var favicon = require('serve-favicon'); // adds a favicon
var logger = require('morgan'); // HTTP request logger middleware
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var config = require('./config')();

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// session support
// app.use(session({
//   resave: false, // don't save session if unmodified
//   saveUninitialized: false, // don't create session until something stored
//   secret: '44E3927928E3A25DE31A8FA1B6A13'
// }));

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
