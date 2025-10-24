import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from "pinia";
import ui from "@nuxt/ui/vue-plugin";
import Editor from './App/index.vue'

import App from "./App.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Editor },
  ]
});

app.use(ui);
app.use(createPinia());
app.use(router);

app.mount("#app");
