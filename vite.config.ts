import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
import path from "path";
export default defineConfig({
  plugins: [vue()],
  base: './', // 使用相对路径
  css: {
    postcss: {
      plugins: [tailwindcss()], // 生成类型声明文件],
    },
  },
  resolve: {
    extensions: ['.ts', '.json'], // 优先解析 .ts 文件
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

});
