const db = require('../model/userModel');
require('dotenv').config();

const userAuthController = {};

userAuthController.authorize = (req, res, next) => {
  const userQuery = {
    text: `SELECT * FROM users WHERE username = $1`,
    values: [`${req.body.username}`],
  };

  db.query(userQuery)
    .then((data) => {
      const user = {
        id: data.rows[0].id,
        username: data.rows[0].username,
        password: data.rows[0].password,
      };

      console.log('USER', user)

      //check if the password matches
      if (req.body.password === user.password) {
        res.locals.user = user;
        return next();
      } else {
        res.locals.error = {
          code: e.code,
          message: e.detail,
        };
        res.redirect('/');
      }
    })
    .catch((e) => {
      console.log('ERROR:', e);
      return next(e);
    });
};

module.exports = userAuthController;
