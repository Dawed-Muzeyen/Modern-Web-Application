require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./routes/routes");

const app = express();

app.use(function (req, res, next) {
    console.log(req.method, req.ur);
    next();
});

app.use(express.static(path.join(__dirname , process.env.PUBLIC_FOLDER)));
app.use("/api", routes);

const server = app.listen(process.env.PORT, function() {
    console.log(process.env.MSG_SERVER_START, server.address().port);
});