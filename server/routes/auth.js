import express from "express";
import { signupCtrl, signinCtrl } from "../controllers/authCtrl.js";

const router = express.Router();

// Authentication
router.post("/signup", signupCtrl);
router.post("/signin", signinCtrl);

export default router;
