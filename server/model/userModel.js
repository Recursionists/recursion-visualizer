const { Pool } = require('pg');
require('dotenv').config();

const PG_URI = `postgres://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.HOST}.db.elephantsql.com:5432/${process.env.USERNAME}`;

const pool = new Pool({ connectionString: PG_URI });

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
