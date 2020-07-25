const Link = require("../models/Link.ts");

class LinkController {
  async generate(req, res) {
    try {
    } catch (e) {
      await res.status(500).json({ status: 500, message: "Link controller generate error" });
    }
  }

  async getLinks(req, res) {
    try {
      const links = await Link.find({ owner: null });
      await res.status(200).json({ status: 200, links });
    } catch (e) {
      await res.status(500).json({ status: 500, message: "Link controller get links error" });
    }
  }

  async getLink(req, res) {
    try {
      const link = await Link.findById(req.params.id);
      await res.status(200).json({ status: 200, link });
    } catch (e) {
      await res.status(500).json({ status: 500, message: "Link controller get link error" });
    }
  }
}

module.exports = new LinkController();
