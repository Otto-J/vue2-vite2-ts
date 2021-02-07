import { createVuePlugin } from "vite-plugin-vue2";
import { defineConfig } from "vite";
import path from "path";

// import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
  plugins: [
    // vue()
    createVuePlugin(),
  ],
});
