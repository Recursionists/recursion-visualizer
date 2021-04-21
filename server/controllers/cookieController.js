var express = require('express');
var cookieParser = require('cookie-parser')
const cookieController = {};


cookieController.setOAuthCookie = (req, res, next) => {
  //set cookie using userId
  res.cookie('OAuthCookie', res.locals.accessToken, { httpOnly: true });
  return next();
};

cookieController.setLoginCookie = (req, res, next) => {
  res.cookie('SSID', res.locals.user.id, { httpOnly: true })
  return next();
}

module.exports = cookieController;
