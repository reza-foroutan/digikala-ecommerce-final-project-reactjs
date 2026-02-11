import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // ۱. این خط باید اضافه شود

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ۲. این بخش تعریف می‌کند که @ همان src است
    },
  },
});
