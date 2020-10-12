import { Response, Request } from "express";

export function special(req: Request, res: Response) {
  return res.json({ message: "Hey you are Logged!" });
}
