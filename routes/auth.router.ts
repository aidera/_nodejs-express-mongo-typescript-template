export {};

const express = require("express");
const validator = require("../services/validation");
const AuthController = require("../controllers/auth.controller");
const router = express.Router();

router.post("/register",
  validator.register,
  AuthController.register)

router.post("/login",
  validator.login,
  AuthController.login)

module.exports = router;
