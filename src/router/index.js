import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/PaginaInicial.vue'),
    },
    {
      path: '/egressos',
      name: 'egressos',
      component: () => import('../pages/EgressosPage.vue'),
    },
    {
      path: '/depoimentos',
      name: 'depoimentos',
      component: () => import('../pages/DepoimentosPage.vue'),
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../pages/CadastroPage.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginPage.vue'),
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: () => import('../pages/PerfilPage.vue'),
    },
  ],
});

export default router;
