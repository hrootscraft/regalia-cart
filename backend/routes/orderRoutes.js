import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/:id:pay").put(protect, updateOrderToPaid);
router.route("/:id").get(protect, getOrderById);
router.route("/").post(protect, addOrderItems);

export default router;
