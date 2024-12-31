import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";

import "./style.css";

import App from "./App.vue";
import TheVideo from "./components/main/TheVideo.vue";
import ThePageIphones from "./components/main/ThePageIphones.vue";
import ThePageAirpods from "./components/main/ThePageAirpods.vue";
import ThePageIpads from "./components/main/ThePageIpads.vue";
import ThePageWatches from "./components/main/ThePageWatches.vue";

const pinia = createPinia();
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "Home", path: "/", component: TheVideo },
    { name: "iPhones", path: "/iphones", component: ThePageIphones },
    { name: "AirPods", path: "/airpods", component: ThePageAirpods },
    { name: "iPads ", path: "/ipads", component: ThePageIpads },
    { name: "Watches", path: "/watches", component: ThePageWatches },
  ],
});

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
