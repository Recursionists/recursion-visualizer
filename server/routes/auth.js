const express = require('express');
const OAuthController = require('../controllers/OAuthController');
const cookieController = require('../controllers/cookieController');
const userAuthController = require('../controllers/userAuthController');
const signupController = require('../controllers/signupController');

const router = express.Router();

/**
 * Landing page
 * Login page endpoint
 */
router.post(
  '/login',
  userAuthController.authorize,
  //  userAuthController.getFuncs,
  (req, res) => {
    return res.redirect('/main');
  }
);

/**
 * Landing page
 * Github OAuth login endpoint
 */
router.get(
  '/OAuthlogin',
  OAuthController.getCode,
  OAuthController.getUser,
  cookieController.setSSIDCookie,
  (req, res) => {
    return res.redirect('/main');
  }
);

/**
 * Landing page
 * Sign up endpoint
 */
router.post('/signup', signupController.createUser, (req, res) => {
  return res.redirect('/main');
});

module.exports = router;
