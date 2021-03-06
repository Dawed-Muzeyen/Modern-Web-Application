require('dotenv').config();
const routes = require('./api/routes');
const express = require('express');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', routes);
app.listen(process.env.PORT, function () {
  console.log('server is started at port : ' + process.env.PORT);
});
