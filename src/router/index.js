
import { createRouter, createWebHistory } from "vue-router";
import Homevue from "@/views/Home.vue";
import ConnectUsvue from "@/views/ConnectUs.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component:Homevue,

  },
  {
    path: "/connect",
    name:"connect",
    component:ConnectUsvue,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
