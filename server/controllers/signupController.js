const db = require('../model/userModel');

const signupController = {};

signupController.createUser = (req, res, next) => {
  const user = { username: req.body.username, password: req.body.password };

  const userQuery = {
    text: `INSERT INTO users(username, password) VALUES ($1, $2) RETURNING *`,
    values: [`${user.username}`, `${user.password}`],
  };

  db.query(userQuery)
    .then((data) => {
      // went through
      console.log('Went through data: ', data);
      res.locals.user = user;
      return next();
    })
    .catch((e) => {
      res.locals.error = {
        code: e.code,
        message: e.detail,
      };
      res.redirect('/');
    });
};

module.exports = signupController;

// DUPLICATED ERROR
// {
//   length: 183,
//   severity: 'ERROR',
//   code: '23505',
//   detail: 'Key (username)=(Jeff) already exists.',
//   hint: undefined,
//   position: undefined,
//   internalPosition: undefined,
//   internalQuery: undefined,
//   where: undefined,
//   schema: 'public',
//   table: 'users',
//   column: undefined,
//   dataType: undefined,
//   constraint: 'uc_user',
//   file: 'nbtinsert.c',
//   line: '527',
//   routine: '_bt_check_unique'
// }
