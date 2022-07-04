import { createRouter, createWebHistory } from "vue-router";
import Inicio from "./components/Inicio.vue";
import Acerca from "./components/Acerca.vue";

const routes = [
    { path: "/", component: Inicio },
    { path: "/acerca", component: Acerca },
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;