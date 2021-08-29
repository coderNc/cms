import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import localeCache from '@/utils/cache';
import { firstMenu } from '@/utils/map-menu';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/pages/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/not-found/404.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to) => {
  if (to.path !== '/login') {
    // 将没有token的路径重定向到登录页
    const token = localeCache.getCache('token');
    if (!token) {
      return '/login';
    }
  }
  if (to.path === 'main') {
    return firstMenu.url;
  }
});
export default router;
