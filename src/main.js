import Vue from 'vue'
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script';
// 导入我们刚刚创建好的路由
import router from './router/index.js'
import { domain, clientId, audience } from '../auth_config.json';
import { Auth0Plugin } from '@/auth/auth0-plugin';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(LoadScript);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname,
    );
  },
});

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
  router
}).$mount('#app')

