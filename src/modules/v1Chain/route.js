const express = require("express");
const proxy = require('express-http-proxy');

const router = express.Router();

const chainApiPort = "8888";

router.use('/', function (req, res, next) {
  const v1ChainUrl = `${req.protocol}://${req.hostname}:${chainApiPort}${req.baseUrl}${req.path}`;
  console.log(v1ChainUrl);
  return proxy(v1ChainUrl, {filter: function(req, res) {
    return req.method == 'POST'})(req, res, next);
},)
router.get('/get_info', function (req, res, next) {
  const v1ChainUrl = `${req.protocol}://${req.hostname}:${chainApiPort}${req.baseUrl}${req.path}`;
  return proxy(v1ChainUrl)(req, res, next);
})


module.exports = router;
