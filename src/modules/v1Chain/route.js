const express = require("express");
const proxy = require('express-http-proxy');

const router = express.Router();

const chainApiPort = "8888";

router.post('/v1/chain/*', function (req, res, next) {
  const v1ChainUrl = `${req.protocol}://${req.hostname}:${chainApiPort}${req.baseUrl}${req.path}`;
  console.log(v1ChainUrl);
  return proxy(v1ChainUrl)(req, res, next);
})
router.get('/v1/chain/*', function (req, res, next) {
  const v1ChainUrl = `${req.protocol}://${req.hostname}:${chainApiPort}${req.baseUrl}${req.path}`;
  res.redirect(307, v1ChainUrl);
})


module.exports = router;
