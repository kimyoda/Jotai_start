import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // '/random_joke' 로 요청이 들어오면 이 요청을 proxy로 리디렉션
      "/random_joke": {
        target: "https://official-joke-api.appspot.com", // API가 실제로 있는 곳
        changeOrigin: true, // 원본 출처 변경 허용
        rewrite: (path) => path.replace(/^\/random_joke/, "/random_joke"), // 경로 유지
      },
    },
  },
});
