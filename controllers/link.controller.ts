export {};

const Link = require("../models/Link");

class LinkController {
  async generate(req, res) {
    try {

    } catch (e) {
      res.status(500).json({status: 500, message: "Link controller generate error"})
    }
  }

  async getLinks(req, res) {
    try {
      const links = await Link.find({ owner: null });
      res.status(200).json({status: 200, links});
    } catch (e) {
      res.status(500).json({status: 500, message: "Link controller get links error"})
    }
  }

  async getLink(req, res) {
    try {
      const link = await Link.findById(req.params.id);
      res.status(200).json({status: 200, link});
    } catch (e) {
      res.status(500).json({status: 500, message: "Link controller get link error"})
    }
  }
}

module.exports = new LinkController();