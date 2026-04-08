import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "/chae/",
  resolve: {
    alias: {
      "chae-ui/styles": resolve(__dirname, "../src/styles/tokens.css"),
      "chae-ui/theme": resolve(__dirname, "../src/lib/theme.js"),
      "chae-ui": resolve(__dirname, "../src/index.js"),
    },
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
});
