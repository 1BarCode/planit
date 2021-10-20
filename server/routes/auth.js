import express from "express";
import { signupCtrl, signinCtrl } from "../controllers/usersCtrl.js";

const router = express.Router();

// Authentication
router.post("/signin", signinCtrl);
router.post("/signup", signupCtrl);

export default router;
