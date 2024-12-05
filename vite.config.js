import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/yacht-adventures/",
  build: {
    outDir: "dist", // Указуємо, що білд йде в dist
  },
});
