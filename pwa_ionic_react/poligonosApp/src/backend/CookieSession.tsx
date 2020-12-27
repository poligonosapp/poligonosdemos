import { response } from "express";

const cookieSession = require('cookie-session');
const express = require('express');
const logger = require('morgan');
const app = express();
app.use(logger('CookieSession...'));
app.use(cookieSession({
  name: 'session',
  keys: [/* secret keys */],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

module.exports = cookieSession;
export default cookieSession;
