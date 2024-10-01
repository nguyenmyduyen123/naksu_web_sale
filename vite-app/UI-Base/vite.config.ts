import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Đảm bảo Vite không trùng port với Next.js
  },
  build: {
    outDir: "out", // Đầu ra khi build Vite
  },
});
