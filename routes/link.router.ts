export {};

const express = require("express");
const LinkController = require("../controllers/link.controller.ts");
const authMiddleware = require("../middleware/auth.middleware.ts");

const router = express.Router();

router.post("/generate", authMiddleware, LinkController.generate);
router.post("/", authMiddleware, LinkController.getLinks);
router.post("/:id", authMiddleware, LinkController.getLink);

module.exports = router;
