import { response } from "express";
import jwt from "jsonwebtoken";

export const getToken = (user) => {
  return jwt.sign(user, "SECRET_KEY");
};

export const verifyUser = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
