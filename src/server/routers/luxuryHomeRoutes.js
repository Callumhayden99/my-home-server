import express from "express";
import {
  createLuxuryHomeController,
  getLuxuryHomesController,
  getLuxuryHomeByIdController,
  updateLuxuryHomeController,
  deleteLuxuryHomeController,
} from "../controller/luxuryHomeController.js";

const router = express.Router();

router.post("/", createLuxuryHomeController);
router.get("/", getLuxuryHomesController);
router.get("/:id", getLuxuryHomeByIdController);
router.put("/:id", updateLuxuryHomeController);
router.delete("/:id", deleteLuxuryHomeController);

export default router;