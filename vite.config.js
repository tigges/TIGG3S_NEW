import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        optionA: resolve(root, "mockups/option-a.html"),
        optionB: resolve(root, "mockups/option-b.html"),
      },
    },
  },
});
