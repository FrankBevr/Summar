import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import { templateCompilerOptions } from "@tresjs/core";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    vue({
      ...templateCompilerOptions,
    }),
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        // for the assets (css, images, fonts, etc)
        assetFileNames: `[name].[hash][extname]`,
        // for the entry JS files and dynamic import chunks
        chunkFileNames: `[name].[hash].js`,
        entryFileNames: `[name].[hash].js`,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
