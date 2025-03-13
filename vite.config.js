import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@recoil": path.resolve(__dirname, "src/recoil"),
      "@apis": path.resolve(__dirname, "src/apis"),
    },
  },
  //scss
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@assets/styles/color.scss" as *;
          @use "@assets/styles/font.scss" as *;
          @use "@assets/styles/main.scss" as *;`,
      },
    },
  },
});
