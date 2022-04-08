import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Help from "../views/favourits.vue";
import Blog from "../views/blog.vue";
import products from "../views/products.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cars",
    name: "Cars",
    component: products,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/help",
    name: "help",
    component: Help,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
