import Vue from 'vue'
import router from './router'
import './assets/css/global.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MyHttpServer from "./plugins/http";
import App from "./App";

//使用插件，类似把插件放进容器里
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(MyHttpServer)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
