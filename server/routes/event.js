import express from "express";
import { signupCtrl, signinCtrl } from "../controllers/usersCtrl.js";

const router = express.Router();

// Authentication
router.post("/create");
router.post("/delete");

export default router;
