// Module calling
const MongoClient = require("mongodb").MongoClient;

// Server path
const url = "mongodb://localhost:27017/";

// Name of the database

let _connection = null;
const open = function () {
  if (get() == null)
    MongoClient.connect(url, (err, client) => {
      if (!err) {
        console.log("successful connection with the server");
        _connection = client.db(process.env.DB_NAME);
        console.log(_connection);
      } else console.log("Error in the connectivity");
    });
};
const get = function () {
  return _connection;
};

open();
module.exports = {
  open: open,
  get: get,
};
