const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
var url = 'mongodb://localhost:27017/mydb';
let _connection = null;

const open = function () {
  if (get() == null) {
    console.log(process.env.DB_URL);
    MongoClient.connect(process.env.DB_URL, function (err, client) {
      if (err) {
        console.log('DB connection failed', err);
        return;
      }
      _connection = client.db(process.env.DB_NAME);
      console.log('DB connection open', _connection);
    });
  }
};

const get = function () {
  return _connection;
};

module.exports = {
  open: open,
  get: get,
};
