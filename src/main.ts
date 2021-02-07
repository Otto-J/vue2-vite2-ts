// import { createApp } from 'vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from "./App.vue";
import Vue from "vue";
import router from "./router";
import "@/plugins/element";
import store from "@/store";
// createApp(App).mount('#app')
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
