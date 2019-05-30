// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import echarts from 'echarts'
//和这一行：
Vue.prototype.$echarts = echarts
import viewPort from '../static/js/viewport'

// viewPort()
import '../static/css/reset.css'
import '../static/css/animate.css'
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

Vue.config.productionTip = false

Vue.prototype.$ajax = axios

var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(Vant);
Vue.use(MintUI);

Vue.use(echarts);




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
