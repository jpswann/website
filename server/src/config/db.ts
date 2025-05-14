// db.ts
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASS,
  port: Number(process.env.PG_PORT),
});

pool
  .connect()
  .then((client) => {
    console.log("✅ Connected to PostgreSQL");
    client.release(); // Always release the client when done
  })
  .catch((err) => {
    console.error("❌ PostgreSQL connection error:", err);
  });

pool.query("SELECT current_database()", (err, res) => {
  if (err) {
    console.error("Connection test failed:", err);
  } else {
    console.log("Connected to database:", res.rows[0].current_database);
  }
});

export default pool;
