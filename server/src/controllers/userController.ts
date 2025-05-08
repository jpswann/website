import { Request, Response } from "express";
import db from "../config/db";

export const getUsers = async (_req: Request, res: Response) => {
  try {
    console.log(process.env.PG_PASS);
    const result = await db.query("SELECT * FROM users");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Server error" });
  }
};
