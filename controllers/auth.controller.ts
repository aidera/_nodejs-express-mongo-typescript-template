const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { validationResult } = require("express-validator");

const User = require("../models/User.ts");

class AuthController {
  async register(req, res) {
    try {
      const validationErrors = validationResult(req);

      if (!validationErrors.isEmpty()) {
        return res.status(400).json({
          status: 400,
          errors: validationErrors.array(),
          message: "Sent data is not correct",
        });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ status: 400, message: "User is already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword });

      await user.save();

      res.json.status(201)({ status: 201, message: "User created" });
    } catch (e) {
      res.json.status(500)({ status: 500, message: "Auth controller register error" });
    }
  }

  async login(req, res) {
    try {
      const validationErrors = validationResult(req);

      if (!validationErrors.isEmpty()) {
        return res.status(400).json({
          status: 400,
          errors: validationErrors.array(),
          message: "Sent data is not correct",
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ status: 400, message: "Incorrect email or password" });
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        return res.status(400).json({ status: 400, message: "Incorrect email or password" });
      }

      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), { expiresIn: "1h" });

      await res.status(200).json({ status: 200, token, userId: user.id });
    } catch (e) {
      await res.status(500).json({ status: 500, message: "Auth controller login error" });
    }
  }
}

module.exports = new AuthController();
