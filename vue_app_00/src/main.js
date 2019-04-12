import Vue from 'vue'
import App from './App.vue'
import router from './router'
import'mint-ui/lib/style.css'
Vue.config.productionTip = false

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


import {Header,Swipe,SwipeItem,Button} from "mint-ui"
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name,Button)

//引入axios库
import axios from "axios"
//配置跨域访问保存session值选项
axios.defaults.withCredentials = true
//将axios库配置在vue实例对象中：方便在组件中使用
Vue.prototype.axios = axios


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
