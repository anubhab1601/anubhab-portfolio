import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          "three-vendor": ["three", "three-stdlib"],
          "gsap-vendor": ["gsap", "@gsap/react"],
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "three", "three-stdlib", "gsap"],
  },
});
