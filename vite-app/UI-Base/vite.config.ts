import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "public/assets", // Đưa các tệp đã build vào thư mục public của Next.js
    emptyOutDir: true, // Dọn sạch thư mục trước khi build
  },
});
