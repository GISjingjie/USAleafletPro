// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*axios*/
import axios from 'axios'

/*antd*/
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

/*databV*/
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)
Vue.config.productionTip = false

/* eslint-disable no-new */


Vue.prototype.$axios=axios

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
