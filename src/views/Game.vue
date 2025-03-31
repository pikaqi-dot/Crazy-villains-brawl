<template>
    <div ref="gameContainer" class="game-container"></div>
</template>

<script setup lang="ts">
import config from '../game/scenes/my'
import { onMounted } from 'vue';
import Phaser from 'phaser'
onMounted(() => {
    // const game = new Phaser.Game(config);
})
</script>

<style scoped>
.game-container {
    width: 100vw;
    height: 100vh;
}


.game-container {
  background-image: url('/assets/background.png'); /* 设置背景图片路径 */
  background-size: cover; /* 让背景图片按比例缩放铺满整个容器 */
  background-position: center; /* 背景图片居中显示 */
  background-repeat: no-repeat; /* 防止背景图片重复 */
}
</style>