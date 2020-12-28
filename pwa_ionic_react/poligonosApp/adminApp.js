let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let adminApp = express();

// view engine setup
adminApp.set('views', path.join(__dirname, 'views'));
adminApp.set('view engine', 'pug');

adminApp.use(logger('dev'));
adminApp.use(express.json());
adminApp.use(express.urlencoded({ extended: false }));
adminApp.use(cookieParser());
adminApp.use(express.static(path.join(__dirname, 'public')));

adminApp.use('/', indexRouter);
adminApp.use('/users', usersRouter);

// catch 404 and forward to error handler
adminApp.use(function(req, res, next) {
  next(createError(404));
});

// error handler
adminApp.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = adminApp;
