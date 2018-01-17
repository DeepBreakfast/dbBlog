var express = require('express');
var path = require('path'); // utilities for working with file/directory paths
var favicon = require('serve-favicon'); // adds a favicon
var logger = require('morgan'); // HTTP request logger middleware
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

var config = require('./config')();
var index = require('./routes/index');
var images = require('./routes/images');
var posts = require('./routes/posts');
var tags = require('./routes/tags');
var users = require('./routes/users');

var app = express();

// connect to the database
mongoose.connect(config.db);

// session support
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: '44E3927928E3A25DE31A8FA1B6A13'
}));

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', index);
app.use('/images', images);
app.use('/posts', posts);
app.use('/tags', tags);
app.use('/users', users);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(config.port, () => console.log('Listening on port ' + config.port));

module.exports = app;
