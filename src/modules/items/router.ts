import { Router } from "express";
import * as controller from "./controllers/index.js";

const router = Router();

// router.get("/", controller.read);
router.post("/", controller.create);

export default router;
