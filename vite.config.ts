import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      include: ["buffer", "fs", "stream", "util", "path", "crypto"],
      globals: {
        global: true,
        Buffer: true,
        process: true,
      },
      protocolImports: true,
    }),
  ],

  optimizeDeps: {
    include: ["base64-js", "buffer", "worldwindjs"],
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },

  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
