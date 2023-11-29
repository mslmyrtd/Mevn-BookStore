import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "home",
      component: Dashboard,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/books/edit/:id",
      name: "EditBook",
      component: () => import("@/views/EditBook.vue"),
      meta: {
        title: "EditPage",
      },
    },
    {
      path: "/books/new",
      name: "CreateBook",
      component: () => import("@/views/NewBook.vue"),
      meta: {
        title: "Create",
      },
    },
    {
      path: "/books/delete/:id",
      name: "DeleteBook",
      component: () => import("@/views/DeleteBook.vue"),
      meta: {
        title: "Delete",
      },
    },
    {
      path: "/books/detail/:id",
      name: "DetailBook",
      component: () => import("@/views/ShowBook.vue"),
      meta: {
        title: "Detail",
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
