require('dotenv').config();
require('./api/data/db.js');
path = require('path');
const routes = require('./api/routes');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});
app.use(express.json(), function (req, res, next) {
  console.log(req.method, req.url);
  next();
});
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
  function (req, res, next) {
    next();
  }
);
app.use(express.static(path.join(__dirname, process.env.PUBLIC_FOLDER)));
app.use('/api', routes);
app.listen(process.env.PORT, function () {
  console.log('server is started at port : ' + process.env.PORT);
});
