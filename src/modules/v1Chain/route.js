const express = require("express");

const router = express.Router();

const chainApiPort = "8888";

router.post('/v1/chain/', function (req, res, next) {
  const v1ChainUrl = `${req.protocol}://${req.hostname}:${chainApiPort}${req.baseUrl}${req.path}`;
  res.redirect(307, v1ChainUrl);
})
router.get('/', function (req, res, next) {
  const v1ChainUrl = `${req.protocol}://${req.hostname}:${chainApiPort}${req.baseUrl}${req.path}`;
  res.redirect(307, v1ChainUrl);
})


module.exports = router;
