<template>
    <div ref="gameContainer" class="game-container"></div>
</template>

<script setup lang="ts">
import config from '../game/scenes/my'
import { onMounted } from 'vue';
import Phaser from 'phaser'
onMounted(() => {
    const game = new Phaser.Game(config);
})
</script>

<style scoped>
.game-container {
    width: 100vw;
    height: 100vh;
}
</style>