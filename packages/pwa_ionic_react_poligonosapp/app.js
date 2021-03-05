import React from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';

// Route-Split Components
const loading = () => <div>Loading...</div>;
const load = loader => Loadable({ loader, loading });

// Our Lazy-loaded Page Components
const App = load(() => import('./pages/App'));
const Tab1 = load(() => import('./pages/Tab1'));
const Tab2 = load(() => import('./pages/Tab2'));
const Tab3 = load(() => import('./pages/Tab3'));

// ...

// Assigning Routes to Components
<div>
<Route path="/" exact component={ App } />
<Route path="/poligonos" exact component={ Tab1 } />
<Route path="/admin/:username" component={ Tab2 } />
<Route path="/poligono" exact component={ Tab3 } />
</div>

let createError = require('http-errors')
let express = require('express')
//cors
let cors = require('cors')
let path = require('path')
let cookieParser = require('cookie-parser')
let logger = require('morgan')

let indexRouter = require('./routes/index.ts')
let adminsRouter = require('./routes/admins')

let app = express();

app.use(cors());
app.use(logger('dev'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admins', adminsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
