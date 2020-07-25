const express = require("express");

const router = express.Router();

router.use("/auth", require("./auth.router.ts"));
router.use("/link", require("./link.router.ts"));

module.exports = router;
