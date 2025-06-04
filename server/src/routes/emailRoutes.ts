import express from "express";
import { sendEmailToQueue } from "../controllers/emailController";

const router = express.Router();

router.post("/", sendEmailToQueue);

export default router;
