import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["08ffe91c278f.ngrok-free.app"],
  },
});
