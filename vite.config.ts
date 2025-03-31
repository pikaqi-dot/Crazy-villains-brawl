import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
import dts from 'vite-plugin-dts';
export default defineConfig({
  plugins: [vue(),dts()],
  css: {
    postcss: {
      plugins: [tailwindcss()], // 生成类型声明文件],
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'], // 优先解析 .ts 文件
  },

});
