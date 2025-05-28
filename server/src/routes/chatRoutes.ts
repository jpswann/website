import express from "express";
import { getChat } from "../controllers/chatController";

const router = express.Router();

router.post("/", getChat);

export default router;
