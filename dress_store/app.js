var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var config = require('./config/config.js');
var mongoose = require('mongoose');

var indexRouter = require('./server/routes/index');

var productsRouter = require('./server/routes/products.js');

var app = express();

mongoose.Promise = global.Promise
	mongoose.connect(config.mongoUri, { useNewUrlParser: true,
	// useCreateIndex: true, 
	useUnifiedTopology: true } )
  .then(() => {
    console.log("Connected to the database!")
  })
	mongoose.connection.on('error', () => {
	throw new Error(`unable to connect to database: ${config.mongoUri}`) 
	})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);

//add products router
app.use('/api/products', productsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
