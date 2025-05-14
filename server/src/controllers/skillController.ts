import { Request, Response } from "express";
import db from "../config/db";

export const getSkills = async (_req: Request, res: Response) => {
  try {
    const result = await db.query(
      "SELECT * FROM public.skills ORDER BY subtitle ASC"
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching skills:", err);
    res.status(500).json({ message: "Server error" });
  }
};
