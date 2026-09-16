import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { jsonLdAbout, jsonLdHome, renderAbout, renderHome } from "./src/render.js";

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "./",
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  plugins: [
    {
      name: "prerender-app",
      transformIndexHtml: {
        order: "pre",
        handler(html, ctx) {
          const isAbout = String(ctx.filename || ctx.path || "").endsWith("about.html");
          const markup = isAbout ? renderAbout() : renderHome();
          const ld = JSON.stringify(isAbout ? jsonLdAbout() : jsonLdHome()).replaceAll("<", "\\u003c");
          return html
            .replace('<div id="app"></div>', `<div id="app">${markup}</div>`)
            .replace(
              '<script type="application/ld+json" id="jsonld"></script>',
              `<script type="application/ld+json" id="jsonld">${ld}</script>`
            );
        },
      },
    },
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
      input: {
        main: resolve(root, "index.html"),
        about: resolve(root, "about.html"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name].js",
        assetFileNames: (info) =>
          info.name?.endsWith(".css") ? "app.css" : "assets/[name][extname]",
      },
    },
  },
});
