import express from "express";
import authUser from "../middlewares/authUser.js";
import { createEvent } from "../controllers/eventCtrl.js";

const router = express.Router();

// Authentication
router.post("/create", authUser, createEvent);
router.post("/delete");

export default router;
