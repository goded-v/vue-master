// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import stores from './vuex/stores'
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false
const store = new Vuex.Store({
  modules: {
    'vuexNum': stores.vuexNum
  }
})
window.document.documentElement.setAttribute('data-theme', 'theme2');
window.EventBus = new Vue();// 存入全局事件监听
window._router = router;// 存入全局路由
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
