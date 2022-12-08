/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer({ open: true })],
  test: {
    globals: true,
    include: ["src/**/*test.{ts,tsx}"],
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
  resolve: {
    alias: [
      {
        find: /^~(.*)$/,
        replacement: "node_modules/$1",
      },
    ],
  },
});
