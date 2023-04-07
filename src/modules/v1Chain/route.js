const express = require("express");
const proxy = require('express-http-proxy');

const router = express.Router();

const chainApiPort = "8888";

router.use('/', proxy(`http://127.0.0.1:${chainApiPort}/v1/chain/get_info`));
//router.use('/', proxy(`${req.protocol}://${req.hostname}:${chainApiPort}${req.baseUrl}${req.path}`));

module.exports = router;
