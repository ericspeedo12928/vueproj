import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "helloworld",
    component: HelloWorld,
  },
  {
    path: "/card",
    name: "card",
    component: () =>
      import(/* webpackChunkName: "card" */ "../views/CardSolid.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: () =>
      import(/* webpackChunkName: "form" */ "../views/FormMultiple.vue"),
  },
  {
    path: "/table",
    name: "table",
    component: () =>
      import(/* webpackChunkName: "table" */ "../views/TableDark.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
