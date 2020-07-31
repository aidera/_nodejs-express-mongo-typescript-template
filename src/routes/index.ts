import express from "express";
import authRouter from "./auth.router";
import linkRouter from "./link.router";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/link", linkRouter);

export default router;
