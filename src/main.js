import Vue from "vue";
import App from "./App.vue";
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import router from './router'
import {auth} from './firebase.js'

Vue.use(SuiVue);
Vue.config.ignoredElements = ['model-viewer']

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

