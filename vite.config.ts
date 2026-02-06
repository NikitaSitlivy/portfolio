import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  // GitHub Pages project site base path
  base: "/portfolio/",
  build: {
    outDir: "docs"
  },
  plugins: [vue()]
});
