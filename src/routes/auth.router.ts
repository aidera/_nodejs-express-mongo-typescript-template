import express from "express";
import validator from "../services/validation";
import AuthController from "../controllers/auth.controller";

const authRouter = express.Router();

authRouter.post("/register", validator.register, AuthController.register);
authRouter.post("/login", validator.login, AuthController.login);

export default authRouter;
