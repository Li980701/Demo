// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import rou from './router/index'
import App from './App'

// Use Antd UI as required
Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
  router: rou,
}).$mount('#app');