import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const routes = [
  { path: "/", component: HomePage }, 
  {
    path: "/history",
    component: () => import("../pages/EventsHistory.vue"), // bookmarkable stranica
  },
  {
    path: "/stats",
    component: () => import("../pages/EventsStats.vue"), // bookmarkable stranica
  },
  { path: "/:pathMatch(.*)*", component: () => import("../pages/NotFound.vue") }, // Catch-all za 404
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
