import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/edit/:id",
      name: "EditBook",
      component: () => import("@/views/EditBook.vue"),
      meta: {
        title: "EditPage",
      },
    },
    {
      path: "/new",
      name: "CreateBook",
      component: () => import("@/views/NewBook.vue"),
      meta: {
        title: "Create",
      },
    },
    {
      path: "/delete/:id",
      name: "DeleteBook",
      component: () => import("@/views/DeleteBook.vue"),
      meta: {
        title: "Create",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "PageNotFound",
      component: () => import("@/views/PageNotFound.vue"),
      meta: {
        title: "NotFound",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
