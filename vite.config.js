import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Désactiver les sourcemaps en production
    minify: "esbuild",
  },
  server: {
    port: 3000,
    // Désactiver CSP en développement pour éviter les problèmes EmailJS
    middlewareMode: false,
  },
});
