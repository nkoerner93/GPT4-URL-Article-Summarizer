import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/frontend", // This should match the src path in your `vercel.json`
  build: {
    outDir: "dist", // This should match the distDir in your `vercel.json`
  },
  plugins: [react()],
});
