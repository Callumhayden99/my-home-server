import express from "express";
import {
  createLuxuryHomeController,
  getLuxuryHomesController,
  getLuxuryHomeByIdController,
  updateLuxuryHomeController,
  deleteLuxuryHomeController,
} from "../controller/luxuryHomeController.js";
import authMiddleware from "../authMiddleware.mjs";

const router = express.Router();

// Public routes (accessible to all users)
router.get("/", getLuxuryHomesController);
router.get("/:id", getLuxuryHomeByIdController);

// Admin routes (protected)
router.post("/", authMiddleware, createLuxuryHomeController);
router.put("/:id", authMiddleware, updateLuxuryHomeController);
router.delete("/:id", authMiddleware, deleteLuxuryHomeController);

export default router;