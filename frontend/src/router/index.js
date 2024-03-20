import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: Dashboard,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/books',
      name: 'Books',
      component: () => import('@/views/BooksView.vue'),
      meta: {
        title: 'BooksPage'
      }
    },
    {
      path: '/books/:id',
      name: 'book-detail',
      component: () => import('@/views/BookDetailView.vue'),
      meta: {
        title: 'book-detail'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/ContactView.vue'),
      meta: {
        title: 'Contact'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue'),
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
      meta: {
        title: 'Register'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: () => import('@/views/PageNotFound.vue'),
      meta: {
        title: 'NotFound'
      }
    }
  ],
  linkActiveClass: 'active-link'
});

router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
