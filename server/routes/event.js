import express from "express";
import authUser from "../middlewares/authUser.js";
import { createEvent, deleteEvent } from "../controllers/eventCtrl.js";

const router = express.Router();

// router.get("/:id", authUser, );

router.post("/", authUser, createEvent);

router.delete("/:id", authUser, deleteEvent);

export default router;
