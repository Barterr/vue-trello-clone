const path = require("path");
const _ = require("lodash");
const rootPath = path.normalize(__dirname + "/..");
const env = process.env.NODE_ENV || "development";

/**
 * Default configs applied to all environments. May be overwritten.
 */
const DEFAULT_ENV_CONFIG = {
  root: rootPath,
  app: {
    name: "vue-trello-clone"
  },
  prerenderUrl: "http://localhost:4000/",
  frontUrl: "http://localhost:8888/",
  port: process.env.PORT || 8888,
  db: "mongodb://localhost/vue-trello-clone"
};

/**
 * Current environment config.
 */
const config = _.merge(
  {},
  DEFAULT_ENV_CONFIG,
  {
    // DEVELOPMENT - App development
    development: {},

    // HOMOLOG - Production replica for testing purposes
    homolog: {},

    // PRODUCTION - Public access
    production: {}
  }[env]
);

module.exports = config;
