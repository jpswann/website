// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//test
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:8000",
    },
  },
});
