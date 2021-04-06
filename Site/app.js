const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
require('dotenv').config();


const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/usersRouter');
const productRouter = require('./routes/productRouter');
const categoryRouter = require('./routes/categoryRouter');
const cardRouter = require('./routes/cardRouter');

var cookieCheck = require('./middlewares/cookieCheck');
let checkLocals = require('./middlewares/checkLocals');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(session({secret : "TechnoHouse it's alive!"}));

app.use(cookieCheck);
app.use(checkLocals);

/* RUTAS */ 

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productRouter);
app.use('/categories', categoryRouter);
app.use('/cards', cardRouter);


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
