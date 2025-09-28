import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Vite config for building a React + Tailwind UMD widget
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"), // your widget entry
      name: "MyReactWidget", // global variable for UMD
      fileName: "my-react-widget",
      formats: ["umd"], // UMD format
    },
    rollupOptions: {
      // bundle React inside to avoid forwardRef errors
      external: [], // leave empty
    },
    outDir: "dist", // output folder
  },
});
