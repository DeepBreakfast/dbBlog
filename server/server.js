var express = require('express');
var mongoose = require('mongoose');
var apiRouter = require('./api/apiRouter');
var config = require('./config/config');
var auth = require('./auth/routes');

var app = express();

// connect to the database
mongoose.connect(config.db);

// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api', apiRouter);
app.use('/auth', auth);

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('500 Internal Server Error');
});

// export the app for testing
module.exports = app;
