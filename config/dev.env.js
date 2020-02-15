"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_MOCK: false,
  BASE_API: '"http://47.102.119.198:8008"'
});
