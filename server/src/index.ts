import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import skillRoutes from "./routes/skillRoutes";

dotenv.config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/skills", skillRoutes);

app.get("/api/hello", (_req, res) => {
  res.json("hello");
});

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
