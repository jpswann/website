import express from "express";
import { getSkills } from "../controllers/skillController";

const router = express.Router();

router.get("/", getSkills);

export default router;
