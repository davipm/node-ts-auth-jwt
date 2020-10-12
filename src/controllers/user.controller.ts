import { Response, Request } from "express";
import jwt from "jsonwebtoken";

import config from "../config/config";
import User, { IUser } from "../models/user";

/**
 *
 * @param user
 */
function createToken(user: IUser) {
  return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
    expiresIn: 86400,
  });
}

/**
 *
 * @param req
 * @param res
 */
export async function singUp(req: Request, res: Response) {
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ message: "Please. Send your email and password" });
  }

  const user = await User.findOne({ email: req.body.email });

  if (user) {
    return res.status(400).json({ message: "The User already Exists" });
  }

  const newUser = new User(req.body);
  await newUser.save();
  return res.status(201).json(newUser);
}

/**
 *
 * @param req
 * @param res
 */
export async function singIn(req: Request, res: Response) {
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ message: "Please. Send your email and password" });
  }

  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({ message: "The User does not Exists" });
  }
}
