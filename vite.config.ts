import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 5173,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime"],
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("/react/") || id.includes("/react-dom/")) return "react";
          if (id.includes("/react-router-dom/")) return "router";
          if (id.includes("/@radix-ui/")) return "radix";
          if (id.includes("/recharts/") || id.includes("/d3-")) return "charts";
          if (id.includes("/framer-motion/")) return "motion";
          if (id.includes("/date-fns/") || id.includes("/react-day-picker/")) return "dates";
          if (id.includes("/@tanstack/react-query/")) return "query";
          if (id.includes("/react-hook-form/") || id.includes("/@hookform/")) return "forms";
          if (id.includes("/lucide-react/")) return "icons";
          return "vendor";
        },
      },
    },
  },
}));
