import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"

import Index from "./components/Index.vue"
import MusicList from "./components/MusicList.vue"
import Toplist from "./components/Toplist.vue"
import Player from "./components/Player.vue"
import Play from "./components/Play.vue"
Vue.use(Router)
//2.为Test组件配置访问路径 /Test
export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:'/Index',component:Index},
    {path:'/MusicList',component:MusicList},
    {path:'/Toplist',component:Toplist},
    {path:'/Player',component:Player},
    {path:'/Play',component:Play}
  ]
})
