import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'
import router from './router'
import { auth } from './firebase.js'
import VueMobileDetection from 'vue-mobile-detection'
import Vuex from 'vuex'
import store from './store'

Vue.use(VueMobileDetection)
Vue.use(SuiVue)
Vue.use(Vuex)
Vue.config.ignoredElements = ['model-viewer']

let app
auth.onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: (h) => h(App)
        }).$mount('#app')
    }
})
