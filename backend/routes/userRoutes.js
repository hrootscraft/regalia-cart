import {
  authUser,
  getUserProfile,
  getUsers,
  registerUser,
  updateUserProfile,
  deleteUser,
  getUserById,
  updateUser
} from "../controllers/userController.js";
import express from "express";
const router = express.Router();
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.route("/login").post(authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
