import { Router } from "express";

import { singIn, singUp } from "../controllers/user.controller";

const router = Router();

router.post("/signup", singUp);
router.post("/signin", singIn);

export default router;
