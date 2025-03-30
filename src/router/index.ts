import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'), // 当前页面
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/Game.vue'), // 游戏页面
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;