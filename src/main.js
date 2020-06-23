// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';
import { BootstrapVue, IconsPlugin, ImagePlugin } from 'bootstrap-vue';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

// Install BootstrapVue and Bootstrap plugins
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ImagePlugin)
Vue.use(Router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
