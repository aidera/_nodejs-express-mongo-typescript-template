import express from "express";
import LinkController from "../controllers/link.controller";
import authMiddleware from "../middleware/auth.middleware";

const linkRouter = express.Router();

linkRouter.post("/generate", authMiddleware, LinkController.generate);
linkRouter.post("/", authMiddleware, LinkController.getLinks);
linkRouter.post("/:id", authMiddleware, LinkController.getLink);

export default linkRouter;
