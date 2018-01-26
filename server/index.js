const express = require("express");
const glob = require("glob");
const mongoose = require("mongoose");
const config = require("./_config/config");

mongoose.connect(config.db, {
  config: { autoIndex: true }
});

const db = mongoose.connection;
db.on("error", function() {
  throw new Error("Unable to connect to database at " + config.db);
});

const models = glob.sync(config.root + "/**/*Model.js", {
  ignore: config.root + "/node_modules/**"
});

models.forEach(function(model) {
  require(model);
});

const app = express();
require("./_config/express")(app, config);

app.listen(config.port, function() {
  global.console.log("Express server listening on port " + config.port);
});
