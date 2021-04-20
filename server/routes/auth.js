const express = require('express');
const OAuthController = require('../controllers/OAuthController');
const cookieController = require('../controllers/cookieController');
const userAuthController = require('../controllers/userAuthController');

const router = express.Router();

/**
 * Landing page
 * Login page endpoint
 */
router.get(
  '/login',
  userAuthController.authorize,
  //  userAuthController.getFuncs,
  (req, res) => {
    return res.status(200).json(res.locals.user);
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
    return res.redirect('/');
  }
);

/**
 * Landing page
 * Sign up endpoint
 */
router.get('/signup', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

module.exports = router;
