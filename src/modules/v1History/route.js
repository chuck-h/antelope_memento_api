const express = require("express");
const constroller = require("./controller");

const router = express.Router();

//router.get("/v1/history/get_actions", constroller.get_actions);
router.get("/v1/history/get_transaction", constroller.get_transaction);
//router.get("/v1/history/get_key_accounts", constroller.get_key_accounts);
//router.get("/v1/history/get_controlled_accounts", constroller.get_controlled_accounts);

module.exports = router;
