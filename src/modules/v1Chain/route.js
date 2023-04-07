const express = require("express");
const proxy = require('express-http-proxy');

const router = express.Router();

const chainApiPort = "8888";

router.use('/', proxy(`127.0.0.1:${chainApiPort}`, {
    proxyReqPathResolver: function(req) {
      return `${req.baseUrl}${req.path}`;
    },
    preserveHostHdr: true
  }));

module.exports = router;
