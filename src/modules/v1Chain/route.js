const express = require("express");

const router = express.Router();

const chainApiPort = "8888";

router.use(function (req, res, next) {
  const v1ChainUrl = `${req.protocol}://${req.hostname}:${chainApiPort}${req.baseUrl}${req.path}`;
  res.redirect(v1ChainUrl);
})


module.exports = router;
