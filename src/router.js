import { createRouter, createWebHistory } from "vue-router";

import homeView from "./views/HomeView.vue";
import ContactsView from "./views/ContactsView.vue";
import ProjectsView from "./views/ProjectsView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: homeView,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
  ],
});

export { router };
