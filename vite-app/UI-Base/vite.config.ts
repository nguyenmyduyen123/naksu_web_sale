import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.tsx',  // Điểm vào của thư viện
      name: 'UIBase',
      fileName: (format) => `ui-base.${format}.js`
    },
    rollupOptions: {
      // Đặt các thư viện React và ReactDOM là external, để sử dụng từ Next.js
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
