import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/': {
  //       target: 'https://cdn.phaserfiles.com/v385',
  //       // chrome.exe --disable-web-security --user-data-dir="C:/TempChromeSession"
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\//, '')
  //     }
  //   }
  // },
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
  },
});
