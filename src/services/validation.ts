import { body } from "express-validator";

const validation = {
  register: [
    body("email").trim().isEmail().normalizeEmail(),
    body("password")
      .not()
      .isEmpty()
      .trim()
      .isLength({ min: 5 })
      .withMessage("Must be at least 5 chars long")
      .matches(/\d/)
      .withMessage("Must contain a number"),
  ],
  login: [
    body("email").trim().isEmail().normalizeEmail(),
    body("password")
      .not()
      .isEmpty()
      .trim()
      .isLength({ min: 5 })
      .withMessage("Must be at least 5 chars long")
      .matches(/\d/)
      .withMessage("Must contain a number"),
  ],
};

export default validation;
