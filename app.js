//Required modules 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var favicon = require('serve-favicon');	
var stylus = require('stylus');
var helmet = require('helmet');


var app = express();  //Create server

var router = require('./routes/routes');

//Not currently used 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));    //Serve static files

//Favicon
//app.use(favicon(path.join(__dirname, 'public', 'cleanBucket.png')));

//Middleware
app.use(stylus.middleware(
  {
    src: __dirname + '/public',
    dest: __dirname + '/public'
  }));

//Not currently used
//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', router);

// catch 404 and forward to error handler for any other pages
app.all('*', function(req, res, next)
{
  var err = new Error();
  err.status=404;
  next(err);
});

// app.use(function(req, res, next) 
// {
//   next(createError(404));
// });

//Custom error handler -- user friendly
app.use(function(err, req, res, next)
{ res.render('error', {message: 'Sorry, the page you requested does not exist', linked:'http://localhost:3006'})  });

// error handler -- not user friendly
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(3006);
console.log("Server started on port 3006");
module.exports = app;