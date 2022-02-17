const colors = require("colors");
const { request } = require("express");

function requestTime(req, res, next) {
  req.requestTime = Date.now();
  console.log(req.requestTime);
  next();
}

function logger(req, res, next) {
  req.requestTime = Date.now();
  console.log(colors.bgGreen.black(req.requestTime));
  next();
}

module.exports = requestTime;
module.exports = logger;
