import express from "express";
import passport from "passport";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import passportMiddleware from "./middlewares/passport";
import authRoutes from "./routes/auth.routes";
import specialRoutes from "./routes/special.routes";

const app = express();

app.set("port", process.env.PORT || 3333);

dotenv.config();
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

app.get("/", (req, res) => {
  return res.send(`api running in port ${app.get("port")}`);
});

app.use(authRoutes);
app.use(specialRoutes);

export default app;
