import { Request, Response } from "express";
import Link from "../models/Link";

const LinkController = {
  async generate(req: Request, res: Response) {
    try {
      const owner = JSON.parse(req.params.user);
      console.log("Generated to owner:");
      console.log(owner);
    } catch (e) {
      await res.status(500).json({ status: 500, message: "Link controller generate error" });
    }
  },

  async getLinks(req: Request, res: Response) {
    try {
      const owner = JSON.parse(req.params.user);
      const links = await Link.find({ owner });
      await res.status(200).json({ status: 200, links });
    } catch (e) {
      await res.status(500).json({ status: 500, message: "Link controller get links error" });
    }
  },

  async getLink(req: Request, res: Response) {
    try {
      const link = await Link.findById(req.params.id);
      await res.status(200).json({ status: 200, link });
    } catch (e) {
      await res.status(500).json({ status: 500, message: "Link controller get link error" });
    }
  },
};

export default LinkController;
