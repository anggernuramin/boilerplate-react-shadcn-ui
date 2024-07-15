import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      // menyimpan path alias yang digunakan untuk komponen shcdcn ui library
      "@/components": path.resolve(__dirname, "./src/components"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@container": path.resolve(__dirname, "./src/container"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      // menyimpan path alias yang digunakan untuk utils shcdcn ui library
      "@/lib": path.resolve(__dirname, "./src/lib"),
      "@utils": path.resolve(__dirname, "./src/utils"),

      "@features": path.resolve(__dirname, "./src/features"),
    },
  },
});
