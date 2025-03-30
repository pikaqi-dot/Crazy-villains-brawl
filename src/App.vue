<template>
  <div class="h-screen bg-gray-900 relative overflow-hidden">
   
    <!-- Character Strips
    <div
      class="character-strip"
      style="
        top: 0;
        background-image: url('../logo.png');
      "
    ></div>
    <div
      class="character-strip"
      style="
        top: calc(100vh / 6);
        background-image: url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzY3MjM4YTRiZjE4ZjZhZjZhZjY4ZjY4ZjY4ZjY4ZjY4ZjY4ZjY4ZjY4/3oEjI6SIIHBdRxXI40/giphy.gif');
      "
    ></div>
    <div
      class="character-strip"
      style="
        top: calc(100vh / 6 * 2);
        background-image: url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzY3MjM4YTRiZjE4ZjZhZjZhZjY4ZjY4ZjY4ZjY4ZjY4ZjY4ZjY4ZjY4/3oEjI6SIIHBdRxXI40/giphy.gif');
      "
    ></div>
    <div
      class="character-strip"
      style="
        top: calc(100vh / 6 * 3);
        background-image: url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzY3MjM4YTRiZjE4ZjZhZjZhZjY4ZjY4ZjY4ZjY4ZjY4ZjY4ZjY4ZjY4/3oEjI6SIIHBdRxXI40/giphy.gif');
      "
    ></div>
    <div
      class="character-strip"
      style="
        top: calc(100vh / 6 * 4);
        background-image: url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzY3MjM4YTRiZjE4ZjZhZjZhZjY4ZjY4ZjY4ZjY4ZjY4ZjY4ZjY4ZjY4/3oEjI6SIIHBdRxXI40/giphy.gif');
      "
    ></div>
    <div
      class="character-strip"
      style="
        top: calc(100vh / 6 * 5);
        background-image: url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzY3MjM4YTRiZjE4ZjZhZjZhZjY4ZjY4ZjY4ZjY4ZjY4ZjY4ZjY4ZjY4/3oEjI6SIIHBdRxXI40/giphy.gif');
      "
    ></div> -->
    <router-view></router-view>
    <!-- Content -->
    <div class="relative z-10 w-full h-screen flex items-center justify-center">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center backdrop-blur-sm bg-gray-900/50 p-8 rounded-xl max-w-xl w-full mx-4">
        <h1 class="pixel-font text-4xl text-green-400 mb-8">疯狂小人大乱斗</h1>
        <p class="pixel-font text-xl text-green-200">魔改版</p>
        <div class="mt-24">
          <button
            @click="enterGame"
            class="pixel-font pixel-button text-lg rounded-lg"
          >
            进入游戏
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const enterGame = () => {
  // Add game entry logic here
  console.log('Entering game...');
  router.push({ name: 'Game' }); // 跳转到游戏页面
};
</script>
