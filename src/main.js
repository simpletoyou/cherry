// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入全局样式文件
import './style.less'

//引入Vuex
import store from './store/index.js'
import Vuex from 'vuex'
Vue.use(Vuex)

// 引入背景动画
import VueParticles from 'vue-particles'
Vue.use(VueParticles)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})