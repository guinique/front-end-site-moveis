import Vue from "vue";
import App from "./App.vue";
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import router from './router'

Vue.use(SuiVue);
Vue.config.ignoredElements = ['model-viewer']

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
