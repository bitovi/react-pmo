/// <reference types="vitest" />
import { defineConfig } from "vite"
import { resolve } from "path"

import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@shared": resolve(__dirname, "./src/shared"),
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      enabled: false,
      thresholds: {
        // statements: 90,
        // functions: 90,
        // branches: 90,
        // lines: 90,
      },
    },
  },
})
