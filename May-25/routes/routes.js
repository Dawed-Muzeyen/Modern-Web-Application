const express = require("express");
const router = express.Router();
const path = require("path");
const gamesController= require("../api/controllers/games.controllers");
router.route('/')
.get(function(req, res ){
console.log("main page is rendering");
res.status(200).sendFile(path.join(__dirname, '..//index.html'));
});
router.route("/games")
.get(gamesController.getAllGames);

router.route("/mul/:firstnumber")
.get(gamesController.product);

router.route("/students")
.get(gamesController.getAllStudents);

router.route("/students/:studId")
.get(gamesController.getOneStudent);


module.exports=router;