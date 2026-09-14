import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "./",
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  plugins: [
    {
      name: "strip-pages-redirect",
      transformIndexHtml: {
        order: "pre",
        handler(html, ctx) {
          if (!ctx.server) {
            return html.replace(
              /<script>\s*\(function \(\) \{[\s\S]*?github\.io[\s\S]*?<\/script>\s*/m,
              ""
            );
          }
          return html;
        },
      },
    },
  ],
  build: {
    outDir: "docs",
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(root, "index.html"),
      output: {
        entryFileNames: "app.js",
        chunkFileNames: "chunks/[name].js",
        assetFileNames: (info) =>
          info.name?.endsWith(".css") ? "app.css" : "assets/[name][extname]",
      },
    },
  },
});
