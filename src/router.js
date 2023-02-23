import { createRouter, createWebHashHistory } from 'vue-router';

import AboutApp from '@/components/AboutApp.vue';
import AppHome from '@/components/AppHome.vue';
import AppSettings from '@/components/AppSettings.vue';
import ProjectSettings from '@/components/ProjectSettings.vue';

const history = createWebHashHistory();
const routes = [
  {
    path: '/',
    component: AppHome
  },
  {
    path: '/settings',
    component: AppSettings
  },
  {
    path: '/project/:id',
    component: ProjectSettings
  },
  {
    path: '/about',
    component: AboutApp
  }
];

const router = createRouter({
  history,
  routes
});

export default router;
