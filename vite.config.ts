import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: {
        preset: "vercel",
      },
    }),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    port: 3001,
    host: "0.0.0.0",
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
