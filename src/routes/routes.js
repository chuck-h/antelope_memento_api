const express = require("express");
const router = express.Router();
const v1ChainRoute = require("../modules/v1Chain/route");
// const v1HistoryRoute = require("../modules/v1History/route");
const healthRoute = require("../modules/health/route");
const historyRoute = require("../modules/history/route");
const transactionRoute = require("../modules/transactionStatus/route");
const graphqlRoute = require("../modules/graphql/route");

router.use("/v1/chain/", v1ChainRoute);
router.use("/", healthRoute);
router.use("/", historyRoute);
router.use("/", transactionRoute);
router.use("/", graphqlRoute);

module.exports = router;
