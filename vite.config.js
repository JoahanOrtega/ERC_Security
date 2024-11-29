import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "cert.key")),
      cert: fs.readFileSync(path.resolve(__dirname, "cert.crt")),
    },
    host: "localhost", // Asegúrate de usar el mismo host que especificaste al generar los certificados.
  },
});
