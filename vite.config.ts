import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'], // 优先解析 .ts 文件
  },

});
