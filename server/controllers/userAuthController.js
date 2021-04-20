const db = require('../model/userModel');
require('dotenv').config();

const userAuthController = {};

userAuthController.authorize = (req, res, next) => {
  console.log('req.body', req.body);

  const userQuery = {
    text: `SELECT * FROM users WHERE username = $1`,
    values: [`${req.body.username}`],
  };

  db.query(userQuery)
    .then((data) => {
      const user = {
        username: data.rows[0].username,
        password: data.rows[0].password,
      };

      //check if the password matches
      if (req.body.password === user.password) {
        console.log(user);
        return next();
      } else {
        // DO SOMETHING IF THE PASSWORD DOES NOT MATCH
        res.locals.baduser = true;
        res.redirect('/');
      }
    })
    .catch((e) => {
      console.log('ERROR:', e);
      return next(e);
    });
};

module.exports = userAuthController;
