export {};

const express = require("express");
const LinkController = require("../controllers/link.controller");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/generate", authMiddleware, LinkController.generate);
router.post("/", authMiddleware, LinkController.getLinks);
router.post("/:id", authMiddleware, LinkController.getLink);

module.exports = router;
