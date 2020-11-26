import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Sesions from "../views/Sesions.vue";
import newSession from "../views/newSession.vue";
import Plans from "../views/Plans.vue";
import OurSesions from "../views/OurSesions.vue";
import Logout from "../views/Logout.vue";
import Perfil from "../views/Perfil.vue";
import OurRehabilitators from "../views/OurRehabilitators.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Sesions",
    component: Sesions
  },
  {
    path: "/plans",
    name: "Plans",
    component: Plans
  },
  {
    path: "/sesions",
    name: "Sesions",
    component: Sesions
  },
  {
    path: "/newsession",
    name: "NewSession",
    component: newSession
  },
  {
    path: "/oursesions",
    name: "OurSesions",
    component: OurSesions
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: Perfil
  },
  {
    path: "/rehabilitators",
    name: "Rehabilitators",
    component: OurRehabilitators
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout
  },
];

const router = new VueRouter({
  routes
});

export default router;
