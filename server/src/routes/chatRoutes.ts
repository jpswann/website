import express from "express";
import { sendChatToQueue } from "../controllers/chatController";

const router = express.Router();

router.post("/", sendChatToQueue);

export default router;
