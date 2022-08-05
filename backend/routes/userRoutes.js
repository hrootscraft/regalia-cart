import asyncHandler from "express-async-handler";
import { authUser, getUserProfile } from "../controllers/userController.js";
import express from "express";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

router.route("/login").post(authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
