import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

export default (req: Request, res: Response, next: Function) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ status: 401, message: "Not authorized" });
    }
    req.params.user = JSON.stringify(jwt.verify(token, config.jwtSecret));
    next();
  } catch (e) {
    return res.status(401).json({ status: 401, message: "Not authorized" });
  }
};
