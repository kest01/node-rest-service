const createError = require('http-errors');
const express = require('express');
var logger = require('morgan');
const cors = require("cors");

var indexRouter = require('./routes/index');
var formsRouter = require('./routes/forms');
var loginRouter = require('./routes/login');
var profileRouter = require('./routes/profile');

var app = express();

const corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/api/forms', formsRouter);
loginRouter(app)
profileRouter(app)

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

const db = require("./dao");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

module.exports = app;
