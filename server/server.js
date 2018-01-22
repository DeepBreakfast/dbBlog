var express = require('express');
var app = express();
var api = require('./api/api');
var config = require('./config/config');
var logger = require('./util/logger');
// var auth = require('./auth/routes');
logger.log(config);
require('mongoose').connect(config.db.url);

if (config.seed) {
  require('./util/seed');
}
// setup the app middlware
require('./middleware/appMiddleware')(app);

// setup the api
app.use('/api', api);
// app.use('/auth', auth);

// error handler
app.use((err, req, res, next) => {
  // if error thrown from jwt validation check
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token');
    return;
  }
  logger.error(err.stack);
  res.render('500 Internal Server Error');
});

app.listen(config.port);
logger.log('listening on http://localhost:' + config.port);

// export the app for testing
module.exports = app;
