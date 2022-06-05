/*Eslint es6 */
const dbConnection = require("../data/dbconnection");
const db = dbConnection.get();

const gamesCollection = db.collection("games");
// const docs= gamesCollection.find(); //Sync not good :(
gamesCollection.find().toArray(function (err, docs) {
  console.log("Found games", docs);
  res.status(200).json(docs);
});
