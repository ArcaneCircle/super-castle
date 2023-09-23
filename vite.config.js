import { webxdcViteConfig } from "webxdc-vite-plugins";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(
  webxdcViteConfig({
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          editor: resolve(__dirname, "editor/index.html"),
        },
      },
    },
  }),
);
