export {};

const express = require("express");
const router = express.Router();

router.use('/auth', require("./auth.router"));
router.use('/link', require("./link.router"));

module.exports = router;