<template>
    <div class="game-scene"  ref="object">
      <!-- 游戏内容 -->
      <h1 class="text-4xl text-white">游戏主场景</h1>
    </div>
  </template>
  
  <script setup lang="ts">
  // 在这里添加游戏逻辑
  import { ref, onMounted } from 'vue';

const object = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (object.value) {
    document.addEventListener('mousemove', (event) => {
      const mouseX = event.clientX; // 鼠标 X 坐标
      const mouseY = event.clientY; // 鼠标 Y 坐标

      // 设置物体的位置
      object.value.style.transform = `translate(${-mouseX}px, ${-mouseY}px)`;
    });
  }
});
  </script>
  
  <style scoped>
  .game-scene {
    width: 100vw; /* 视口宽度 */
    height: 100vh; /* 视口高度 */
    background-image: url('../assets/background.png'); /* 背景图片路径 */
    background-size: cover; /* 图片覆盖整个容器 */
    background-position: center; /* 图片居中 */
    background-repeat: no-repeat; /* 禁止重复 */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  </style>