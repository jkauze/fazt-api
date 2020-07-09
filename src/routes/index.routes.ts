import { Router } from "express";
const router = Router();

import * as indexCtrl from "../controllers/index.controller";

router.get("/", indexCtrl.welcomeMessage);

export default router;